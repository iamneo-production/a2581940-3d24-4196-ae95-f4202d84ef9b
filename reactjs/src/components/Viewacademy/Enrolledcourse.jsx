import { TextField } from "@material-ui/core"
import { useNavigate } from "react-router-dom";
import Header from "../Header";

export default function Enrolledcourse() {
    let navigate = useNavigate()

    const handleSubmit = () => {
        navigate("/enrolledcourse")
    }
    return (
        <div>
            <Header></Header>

            <div style={{ marginTop: '60px' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', margin: '30px 40px' }}>
                        <div className="fields">
                            <TextField style={{ width: 250 }} size="small" id="firstName" label="Enter your first name" name="firstname" variant="outlined" />
                        </div>
                        <div className="fields">
                            <TextField style={{ width: 250 }} size="small" id="lastName" label="Enter your last name" name="lastname" variant="outlined" />
                        </div>
                        <div className="fields">
                            <TextField style={{ width: 250 }} size="small" id="male/female" label="Enter your gender" name="gender" variant="outlined" />
                        </div>
                        <div className="fields">
                            <TextField style={{ width: 250 }} size="small" id="fatherName" label="Enter your father name" name="fathername" variant="outlined" />
                        </div>
                        <div className="fields">
                            <TextField style={{ width: 250 }} size="small" id="phoneNumber1" label="Enter your phone no." name="phoneno1" variant="outlined" />
                        </div>
                        <div className="fields">
                            <TextField style={{ width: 250 }} size="small" id="phoneNumber2" label="Enter alternate phone no." name="phoneno2" variant="outlined" />
                        </div>
                        <div className="fields">
                            <TextField style={{ width: 250 }} size="small" id="motherName" label="Enter your mother name" name="mothername" variant="outlined" />
                        </div>
                        <div className="fields">
                            <TextField style={{ width: 250 }} size="small" id="email" label="Enter your email id" name="email" variant="outlined" />
                        </div>
                        <div className="fields">
                            <TextField style={{ width: 250 }} size="small" id="age" label="Enter your age" name="age" variant="outlined" />
                        </div>
                        <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}>
                            <div style={{ width: '79%', backgroundColor: 'whitesmoke', padding: '20px 15px' }}>
                                <div style={{ textAlign: 'left', fontSize: '18px' }}>Address Information:</div>
                                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                                    <div className="field">
                                        <TextField style={{ width: 220 }} size="small" id="houseNo" label="House no." name="houseno" variant="outlined" />
                                    </div>
                                    <div className="field">
                                        <TextField style={{ width: 220 }} size="small" id="streetName" label="Street name" name="streetname" variant="outlined" />
                                    </div>
                                    <div className="field">
                                        <TextField style={{ width: 220 }} size="small" id="areaName" label="Area name" name="areaname" variant="outlined" />
                                    </div>
                                    <div className="field">
                                        <TextField style={{ width: 220 }} size="small" id="pincode" label="Pincode" name="pincode" variant="outlined" />
                                    </div>
                                    <div className="field">
                                        <TextField style={{ width: 220 }} size="small" id="state" label="State" name="state" variant="outlined" />
                                    </div>
                                    <div className="field">
                                        <TextField style={{ width: 220 }} size="small" id="nationality" label="Nationality" name="nationality" variant="outlined" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{}}>
                            <button onClick={handleSubmit} className="enrollBtn" id="enrollNowButton">Enroll Now</button>
                        </div>
                    </div>
            </div>
        </div>
    )
}