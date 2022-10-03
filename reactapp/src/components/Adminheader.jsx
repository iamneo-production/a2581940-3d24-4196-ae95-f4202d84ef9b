import { useNavigate } from "react-router-dom"

export default function Adminheader(){
    let navigate = useNavigate()

        const handleacademy = () => {
            navigate("/adminacademy")
        }

        const handlecourse = () => {
            navigate("/admincourse")
        }

        const handlestudents = () => {
            navigate("/adminstudents")
        }
        
    return (

        <div>

<div className="header">
                <div style={{fontSize:'22px'}}>Abacus Academy</div>
                <div style={{fontSize:'16px', fontWeight:'400', display:'flex', flexWrap:'wrap'}}>
                    <span onClick={handleacademy} className="tabs" style={{border:'1px solid gray', borderRadius:'4px', padding:'8px 15px', marginLeft:'20px',cursor:"pointer"}}>Academy</span>
                    <span className="tabs" onClick={handlecourse} style={{border:'1px solid gray', borderRadius:'4px', padding:'8px 15px', marginLeft:'20px', cursor:'pointer'}}>Course</span>
                    <span className="tabs" onClick={handlestudents} style={{border:'1px solid gray', borderRadius:'4px', padding:'8px 15px', marginLeft:'20px', cursor:'pointer'}}>Students</span>
                </div>
                <div style={{fontWeight:'400', fontSize:'20px', cursor:'pointer'}}>Log Out</div>
            </div>
        </div>
    )
}