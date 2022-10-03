import Signup from './components/Auth/Signup/Signup';
import './App.css';
import Login from './components/Auth/Login/Login';
import Viewacademy from './components/Viewacademy/Viewacademy';
import Academydetail from './components/Viewacademy/Academydetail';
import Enrolled from './components/Viewacademy/Enrolledcourse';
import Enrolledcourse from './components/EnrolledCourse/Enrolledcourse';
import Adminacademy from './components/Adminacademy/Adminacademy';
import Addacademy from './components/Adminacademy/Addacademy';
import Editacademy from './components/Adminacademy/Editacademy';
import Admincourse from './components/Admincourse/Admincourse';
import Addcourse from './components/Admincourse/Addcourse';
import Editcourse from './components/Admincourse/EditCourse';
import Adminstudent from './components/Adminstudent/Adminstudent';
import Addstudent from './components/Adminstudent/Addstudent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Editstudent from './components/Adminstudent/Editstudent';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Signup/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path="/viewacademy" element={<Viewacademy/>}></Route>
        <Route path="/viewacademy/:acaid" element={<Academydetail/>}></Route>
        <Route path="/enrolled" element={<Enrolled/>}></Route>
        <Route path="/enrolledcourse" element={<Enrolledcourse/>}></Route>
        <Route path="/adminacademy" element={<Adminacademy/>}></Route>
        <Route path="/admincourse" element={<Admincourse/>}></Route>
        <Route path="/adminstudents" element={<Adminstudent/>}></Route>
        <Route path="/addacademy" element={<Addacademy/>}></Route>
        <Route path='/editacademy' element={<Editacademy/>}></Route>
        <Route path='/addcourse' element={<Addcourse/>}></Route>
        <Route path='/editcourse' element={<Editcourse/>}></Route>
        <Route path='/addstudent' element={<Addstudent/>}></Route>
        <Route path='/editstudent' element={<Editstudent/>}></Route>        
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
