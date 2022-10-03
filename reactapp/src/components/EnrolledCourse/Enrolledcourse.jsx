import Header from "../Header"

export default function Enrolledcourse(){

    const enrolledCourses = [
        {course_name:"Doug Abacus", joined_date:"06/03/2000", end_date:"05/09/2000"}
    ]
    return(
        <div>
            <div>
                <Header></Header>
            </div>
            <div style={{display:'flex', justifyContent:'center'}}>
                {enrolledCourses.map((course) => {
                    return <div style={{width:"500px", backgroundColor:'whitesmoke', padding:'20px 20px', margin:'30px 10px', fontSize:'22px', borderRadius:'4px'}}>
                        <div style={{margin:"10px 10px", textAlign:'left'}}><span style={{fontWeight:'bold'}}>Course Name: </span>{course.course_name}</div>
                        <div style={{margin:"10px 10px", textAlign:'left'}}><span style={{fontWeight:'bold'}}>Joined Date: </span>{course.joined_date}</div>
                        <div style={{margin:"10px 10px", textAlign:'left'}}><span style={{fontWeight:'bold'}}>Course End Date: </span>{course.end_date}</div>
                        <div style={{display:'flex', justifyContent:'flex-end'}}>
                            <button style={{borderRadius:'20px', padding:"10px 30px", backgroundColor:"green", cursor:'pointer', border:'none', color:'white', fontSize:'22px', margin:"10px 20px"}}>My Learning</button>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}