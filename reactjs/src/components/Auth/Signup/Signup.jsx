import { TextField } from "@material-ui/core";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../../styles/Signup.css'

export default function Signup() {
    let navigate = useNavigate();
    const [input, setInput] = useState({})

    const handleChange = (event) => {
        let obj = input;        
        obj[event.target.name] = event.target.value;
        setInput(obj)
        console.log(input)
    }

    const handleSubmit = () => {
        console.log(input)  
     if(input.admin === "admin"){
        fetch("http://localhost:8081/admin/signup",  {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(input)
        })
        .then((res) => {
             if(res.ok){
                navigate("/adminacademy")
             }else{
           
             }
        });
    }else{
        fetch("http://localhost:8081/user/signup",  {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(input)
        })
        .then((res) => {
             if(res.ok){
                navigate("/viewacademy")
             }else{
           
             }
        });
    }
    }

    const handleLogin = () => {
        navigate("/login")
    }

    return (
        <div>
            <div className="header">Register</div>
            <div style={{display:'flex', flexDirection: 'column',background:'#ebf1f1',alignItems:'center',justifyContent:'center',marginTop:'30px'}}>
                <div className="fields">
                    <TextField style={{width:300}} onChange={handleChange} value={input.admin} size="small" id="userRole" label="Enter admin/user" name="userRole" variant="outlined" />
                </div>
                <div className="fields">
                    <TextField style={{width:300}} onChange={handleChange} value={input.email} size="small" id="email" label="Enter Email" name="email" variant="outlined" />
                </div>
                <div className="fields">
                    <TextField style={{width:300}} onChange={handleChange} value={input.username} size="small" id="username" label="Enter Username" name="username" variant="outlined" />
                </div>
                <div className="fields">
                    <TextField style={{width:300}} onChange={handleChange} value={input.mobile} size="small" id="mobileNumber" label="Enter Mobile Number" name="mobileNumber" variant="outlined" />
                </div>
                <div className="fields">
                    <TextField style={{width:300}} onChange={handleChange} value={input.password} size="small" id="password" label="Enter Password" name="password" variant="outlined" />
                </div>
                <div className="fields">
                    <TextField style={{width:300}} onChange={handleChange} value={input.password} size="small" id="confirmPassword" label="Confirm Password" name="password" variant="outlined" />
                </div>
                <div style={{width:'100%', marginTop:'30px'}}>
                    <button onClick={handleSubmit} className="submitBtn">Submit</button>
                </div>
                <div style={{width:'100%', marginTop:'10px'}}>
                    <div style={{fontSize:'20px'}}>Already a user? <span onClick={handleLogin} style={{color:'blue', cursor:'pointer'}}>Login</span></div>
                </div>
            </div>
        </div>
    )
}