import { TextField } from "@material-ui/core"
import SearchIcon from '@material-ui/icons/Search';
import abacus1 from "../assests/abacus1.jpg"
import abacus2 from "../assests/abacus2.jpg"
import abacus3 from "../assests/abacus3.jpg"
import { useState } from "react"
import "../styles/Viewacademy.css"
import Enrolledcourse from "../EnrolledCourse/Enrolledcourse";
import { useNavigate } from "react-router-dom";
import Header from "../Header";
export default function Viewacademy(){
    let navigate = useNavigate();

    const academy = [
        {img:abacus1, acad:"Abacus Academy", place:"Channai", rating:"4"},
        {img:abacus2, acad:"Abacus Center", place:"Bangalore", rating:"3"},
        {img:abacus3, acad:"Abc Academy", place:"Coimbatore", rating:"4.5"}
    ]


    const handleSwitch = (event, i) => {
        navigate(`/viewacademy/${i}`)
    }

    return(
        <div>
            <Header></Header>

            <div style={{marginTop:'60px'}}>
                <div>
                    <div style={{display:'flex', justifyContent:'center'}}>
                        <div>
                            <div placeholder="Type here to search Academy.." className="searchBar">
                                <SearchIcon></SearchIcon><input type="text" style={{border:"none"}}></input>
                            </div>
                        </div>
                        <div>
                            <button className="searchBtn">Search</button>
                        </div>
                    </div>

                    <div style={{marginTop:'100px', display:'flex', justifyContent:'center', flexWrap:'wrap'}}>
                        {academy.map((aca, index) => {
                            return <div>
                            <img onClick={(event) => handleSwitch(event, index)} className="abacusImg" src={aca.img} alt="abacus img"></img>
                            <div className="abacusDesp">
                                <div>{aca.acad}</div>
                                <div style={{display:"flex", justifyContent:'space-between', fontSize:'18px', marginTop:'5px'}}><span>Place: {aca.place}</span><span>{aca.rating}</span></div>
                            </div>
                        </div>
                        })}
                    </div>
                    <div style={{display:'flex', justifyContent:'flex-end'}}>
                        <div style={{width:'200px', backgroundColor:'wheat', border:"2px solid black", borderRadius:'4px', cursor:'pointer', padding:'10px', marginRight:'40px'}}>+ Add Academy</div>
                    </div>
                </div>
            </div>
        </div>
    )
}