import { useNavigate } from "react-router-dom"

export default function Header(){
    let navigate = useNavigate()

    const handleswitch = () => {
        navigate('/enrolledcourse')
    }

    const handleswitchacademy = () => {
        navigate('/viewacademy')
    }

    return (
        <div>
            <div className="header">
                <div style={{fontSize:'22px'}}>Abacus Academy</div>
                <div style={{fontSize:'16px', fontWeight:'400', display:'flex', flexWrap:'wrap'}}>
                    <span onClick={handleswitchacademy} className="tabs" style={{border:'1px solid gray', borderRadius:'4px', padding:'8px 15px', marginLeft:'20px',cursor:"pointer"}}>Academy</span>
                    <span className="tabs" onClick={handleswitch} style={{border:'1px solid gray', borderRadius:'4px', padding:'8px 15px', marginLeft:'20px', cursor:'pointer'}}>Enrolled Course</span>
                </div>
                <div style={{fontWeight:'400', fontSize:'20px'}}>Log Out</div>
            </div>
        </div>
    )
}