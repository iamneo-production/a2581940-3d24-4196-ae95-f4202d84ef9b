import "../styles/Viewacademy.css"
import SearchIcon from '@material-ui/icons/Search';
import deleteicon from "../assests/delete.png"
import editicon from "../assests/edit.png"
import { useState } from "react";
import Enrolledcourse from "../EnrolledCourse/Enrolledcourse";
import Adminheader from "../Adminheader";
import { useNavigate } from "react-router-dom";

export default function Admincourse() {
    let navigate = useNavigate()

    const courses = [
        { course_name: "Doug Abacus", course_duration: "3months", course_abialable_timing: "6am-6pm", no_of_Students: "222", course_description: "yyyyyy" },
        { course_name: "Melissa & Doug Add Abacus", course_duration: "5months", course_abialable_timing: "6am-6pm", no_of_Students: "122", course_description: "yyyyyy" }
    ]

    const handleDelete = () => {

    }

    const handleEdit = () => {
        navigate("/editcourse")
    }

    const handleAdd = () => {
        navigate("/addcourse")
    }

    return (
        <div>
            <div>
                <Adminheader></Adminheader>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop:'40px'}}>
                <div>
                    <div placeholder="Type here to search Course.." className="searchBar">
                        <SearchIcon></SearchIcon>
                    </div>
                </div>
                <div>
                    <button className="searchBtn">Search</button>
                </div>
            </div>

            <div style={{ marginTop: '60px' }}>
                <div>
                    {courses.map((course) => {
                        return <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <div className="courseDiv">
                                <div style={{ width: "300px", fontSize: "22px", padding: "15px 8px", textAlign: "left" }}><span style={{ fontWeight: "bold", fontSize: "24px" }}>Course Name: </span>{course.course_name}</div>
                                <div style={{ width: "300px", fontSize: "22px", padding: "15px 8px", textAlign: "left" }}><span style={{ fontWeight: "bold", fontSize: "24px" }}>No. of Student: </span> {course.no_of_Students}</div>
                                <div style={{ width: "300px", fontSize: "22px", padding: "15px 8px", textAlign: "left" }}><span style={{ fontWeight: "bold", fontSize: "24px" }}>Course Duration: </span> {course.course_duration}</div>
                                <div style={{ width: "300px", fontSize: "22px", padding: "15px 8px", textAlign: "left" }}><span style={{ fontWeight: "bold", fontSize: "24px" }}>Course Description: </span> {course.course_description}</div>
                                <div style={{ width: "300px", fontSize: "22px", padding: "15px 8px", textAlign: "left" }}><span style={{ fontWeight: "bold", fontSize: "24px" }}>Available Timing: </span> {course.course_abialable_timing}</div>
                                <div style={{ width: "300px", fontSize: "22px", padding: "15px 8px", textAlign: "left" }}>
                                    <span style={{color:'blue', cursor:'pointer',marginRight:'10px', fontSize:'18px', textDecoration:'underline'}}><img onClick={handleEdit} className="editIcon" src={editicon} alt="edit"></img></span>
                                    <span style={{color:'blue', cursor:'pointer',marginRight:'10px', fontSize:'18px', textDecoration:'underline'}}><img onClick={handleDelete} className="deleteIcon" src={deleteicon} alt="dlt"></img></span>
                                </div>
                            </div>

                        </div>
                    })}
                    <div style={{}}>
                        <button onClick={handleAdd} style={{border:'none', borderRadius:'20px', padding:'10px 25px', backgroundColor:'green', color:'white', cursor:'pointer', margin:'20px', fontSize:'20px'}}>Add Courses</button>
                    </div>
                </div>
                </div>
        </div>
    )
}