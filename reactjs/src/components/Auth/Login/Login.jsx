import { TextField } from "@material-ui/core"
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import "../../styles/Login.css"
export default function Login(){
    let navigate = useNavigate();

    const [input, setInput] = useState({})
    const [user, setUser] = useState("admin")

    const handleChange = (event) => {
        let obj= input 
        obj[event.target.name] = event.target.value
        setInput(obj)
    }

    const handleSignup = () => {
        navigate("/")
    }

    const handleSubmit = () => {
        console.log(input)
        fetch("http://localhost:8081/admin/login",  {
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


        // if(user = "user")
        //     navigate("/viewacademy")
        // else
        //     navigate("/adminacademy")
    }

    return(
        <div>
            <div className="header">Login</div>
            <div style={{display:'flex', justifyContent:'center',background:'#ebf1f1',flexDirection:'column',alignItems:'center', marginTop:'100px'}}>
                <div className="fields">
                    <TextField style={{width:300}} size="small" id="email" label="Enter Email" name="email" variant="outlined" onChange={handleChange}></TextField>
                </div>
                <div className="fields">
                    <TextField style={{width:300}} size="small" id="password" label="Enter Password" name="password" variant="outlined" onChange={handleChange}></TextField>
                </div>
                <div style={{width:'100%', marginTop:'40px'}}>
                    <button id="loginButton" className="submitBtn" onClick={handleSubmit}>Submit</button>
                </div>
                <div style={{width:'100%'}}>
                    <div style={{fontSize:'20px', marginTop:'10px'}}>Ner user/Admin? 
                        <span id="signupLink" style={{color:'blue', cursor:'pointer'}} onClick={handleSignup}> Sign Up</span></div>
                </div>
            </div>
        </div>
    )
}