import { TextField } from "@material-ui/core"
import SearchIcon from '@material-ui/icons/Search';
import "../styles/Adminacademy.css"
import abacus1 from "../assests/abacus1.jpg"
import abacus2 from "../assests/abacus2.jpg"
import abacus3 from "../assests/abacus3.jpg"
import deleteicon from "../assests/delete.png"
import editicon from "../assests/edit.png"
import { useState } from "react"
import Adminheader from "../Adminheader";
import { useNavigate } from "react-router-dom";

export default function Adminacademy(){
    let navigate = useNavigate()

    const academy = [
        {img:abacus1, acad:"Abacus Center", place:"Delhi"},
        {img:abacus2, acad:"Abacus Academy", place:"Hyderabad"},
        {img:abacus3, acad:"Abacus Institute", place:"Banglore"}
    ]

    const handleDelete = () => {

    }

    const handleEdit = () => {
        navigate("/editacademy")
    }

    const handleAdd = () => {
        navigate("/addacademy")
    }

    return(
        <div>
            <Adminheader></Adminheader>

            <div style={{marginTop:'60px'}}>
                <div>

                    <div style={{display:'flex', justifyContent:'center'}}>
                        <div>
                            <div placeholder="Type here to search Academy.." className="searchBar">
                                <SearchIcon></SearchIcon><input type="text" style={{border:"none",backgroundColor:'lightgray'}}></input>
                            </div>
                        </div>
                        <div>
                            <button className="searchBtn">Search</button>
                        </div>
                    </div>

                    <div style={{marginTop:'100px', display:'flex', justifyContent:'center', flexWrap:'wrap'}}>
                        {academy.map((aca) => {
                            return <div>
                            <img className="abacusImg" src={aca.img} alt="abacus img"></img>
                            <div className="abacusDesp">
                                <div><span>{aca.acad}</span></div>
                                <div style={{display:"flex", justifyContent:'space-between', fontSize:'18px', marginTop:'5px'}}><span>Place: {aca.place}</span>
                                <span>  
                                <img onClick={handleEdit} className="editIcon" src={editicon} alt="edit"></img>
                                <img onClick={handleDelete} className="deleteIcon" src={deleteicon} alt="delete"></img>
                                </span>
                                </div>
                            </div>
                        </div>
                        })}
                    </div>
                    <div style={{display:'flex', justifyContent:'flex-end'}}>
                        <div onClick={handleAdd} style={{width:'200px', backgroundColor:'lightgreen', border:"2px solid black", borderRadius:'4px', cursor:'pointer', padding:'10px', marginRight:'40px'}}>+ Add Academy</div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}