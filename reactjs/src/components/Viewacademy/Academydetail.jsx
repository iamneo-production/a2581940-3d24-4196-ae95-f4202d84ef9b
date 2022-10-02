import "../styles/Viewacademy.css"
import SearchIcon from '@material-ui/icons/Search';
import { useState } from "react";
import Enrolledcourse from "../EnrolledCourse/Enrolledcourse";
import Header from "../Header";
import { useNavigate } from "react-router-dom";
export default function Academydetail() {
    let navigate = useNavigate()

    const courses = [
        { course_name: "Doug Abacus", course_duration: "3months", course_abialable_timing: "6am to 6pm", no_of_Students: "222", course_description: "yyyyyy" }
    ]


    let url = window.location.href.split('/')
    // console.log(url[url.length-1])

    const handleSubmit = () => {
        navigate("/enrolled")
    }


    return (
        <div>
            <Header></Header>

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
                                <div style={{ width: "300px", fontSize: "22px", padding: "15px 8px", float: "right" }}>
                                    <button onClick={handleSubmit} className="enrollBtn">Enroll Courses</button>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}