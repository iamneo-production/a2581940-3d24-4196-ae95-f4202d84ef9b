import "../styles/Adminstudent.css"
import SearchIcon from '@material-ui/icons/Search';
import Adminheader from "../Adminheader";
import deleteicon from "../assests/delete.png"
import editicon from "../assests/edit.png"
import { useNavigate } from "react-router-dom";
export default function Adminstudent(){
    let navigate = useNavigate()

    const columns = [
        "Student Id",'Student Name',"Enrolled Course",'Mobile Number'
    ]

    const rows = [
        {studentid:"1232142", studentname:'Harish', enrolledcourse:"Doug Abacus", mobileno:'8074114703'},
        {studentid:"1232143", studentname:'Yasaswini', enrolledcourse:"Doug Abacus", mobileno:'8143514703'},
        {studentid:"1232144", studentname:'Roopa Kala', enrolledcourse:"Doug Abacus", mobileno:'8134514703'},
        {studentid:"2321123", studentname:'UshaSree', enrolledcourse:"Melissa & Doug Add Abacus", mobileno:'8153414703'},
        {studentid:"2321232", studentname:'Fasiulla', enrolledcourse:"Melissa & Doug Add Abacus", mobileno:'7997871716'},
        {studentid:"2422132", studentname:'Keerthi', enrolledcourse:"Melissa & Doug Add Abacus", mobileno:'8341514730'},
    ]

    

    const handleDelete = () => {

    }

    const handleEdit = () => {
        navigate("/editstudent")
    }

    const handleAdd = () => {
        navigate("/addstudent")
    }

    return(
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

            <div style={{display:'flex', justifyContent:'center', marginTop:'30px'}}>
                <table>
                    <tr style={{backgroundColor:'green', color:'white'}}>                        
                        {columns.map((column) => {
                            return <th>{column}</th>
                        })}
                        <th>Actions</th>
                    </tr>

                    {rows.map((row) => {
                        return <tr style={{margin:'20px 5px', padding:'30px 10px'}}>
                            <td>{row.studentid}</td>
                            <td>{row.studentname}</td>
                            <td>{row.enrolledcourse}</td>
                            <td>{row.mobileno}</td>
                            <td><img onClick={handleEdit} src={editicon} alt="edit" className="editIcon"></img>
                            <img onClick={handleDelete} src= {deleteicon} alt="delete" className="deleteIcon"></img></td>
                        </tr>
                    })}
                </table>
            </div>
            <div>
                <button onClick={handleAdd} className="addBtn">Add Student</button>
            </div>
        </div>
    )
}