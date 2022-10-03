import { TextField } from "@material-ui/core";
import Adminheader from "../Adminheader";
import "../styles/Adminacademy.css"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
export default function Addcourse(){

    let navigate = useNavigate();

    const [input, setInput] = useState({})
    const [user, setUser] = useState("admin")

    const handleChange = (event) => {
        let obj= input 
        obj[event.target.name] = event.target.value
        setInput(obj)
    }


    const handleSubmit = () => {
        console.log(input)
        fetch("http://localhost:8081/admin/addCourse",  {
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
    }

    return(
        <div>
            <div><Adminheader></Adminheader></div>
        <div style={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column', marginTop:'50px'}}>
        <div style={{width:'80%', backgroundColor:'whitesmoke', padding:'20px 10px'}}>
            <div style={{fontSize:'22px', fontWeight:'bold', padding:'20px'}}>Add Course</div>
            <div style={{display:'flex', justifyContent:'center', flexWrap:'wrap'}}>
                <div className="fields">
                    <TextField onChange={handleChange} style={{width:300}} size="small" id="courseName" label="Enter Course Name" name="courseName" variant="outlined" />
                </div>
                <div className="fields">
                    <TextField onChange={handleChange} style={{width:300}} size="small" id="courseEnrolled" label="Enter Number of course enrolled" name="courseEnrolled" variant="outlined" />
                </div>
                <div className="fields">
                    <TextField onChange={handleChange} style={{width:300}} size="small" id="courseDuration" label="Enter Course duration" name="courseDuration" variant="outlined" />
                </div>
                <div className="fields">
                    <TextField onChange={handleChange} style={{width:300}} size="small" id="courseDescription" label="Enter Course Description" name="courseDescription" variant="outlined" />
                </div>
                <div className="fields">
                    <TextField onChange={handleChange} style={{width:300}} size="small" id="courseTiming" label="Enter Course Timing" name="courseTiming" variant="outlined" />
                </div>
            </div>
        </div>
        <div style={{width:'100%'}}>
            <button className="btn" onClick={handleSubmit} style={{border:'none', borderRadius:'20px', padding:'10px 25px', backgroundColor:'green', color:'white', cursor:'pointer', margin:'20px', fontSize:'20px'}}>Add Course</button>
        </div>
        </div>
        </div>
    )
}