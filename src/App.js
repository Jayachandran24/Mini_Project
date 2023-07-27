
import {Routes, Route } from "react-router-dom";
import './App.css';
import RegistorForm from './Components/RegistorForm/RegistorForm';
import LoginPageComponent from './pages/LoginPageComponent';
import HomePage from "./pages/HomePage";
import SideBar from "./Components/SideBar/SideBar";
import Cardiologypg from "./pages/Departmentpg/Cardiologypg";
import CriticalCare from "./pages/Departmentpg/CriticalCare";
import Dental from "./pages/Departmentpg/Dental";
import Gastroenterology from "./pages/Departmentpg/Gastroenterology";
import Physicians from "./pages/Departmentpg/Physicians";
import Infertility from "./pages/Departmentpg/Infertility";
import Nephrology from "./pages/Departmentpg/Nephrology";
import Neurosurgery from "./pages/Departmentpg/Neurosurgery";
import Gynecology from "./pages/Departmentpg/Gynecology";
import Orthopaedics from "./pages/Departmentpg/Orthopaedics";
import Pediatrics from "./pages/Departmentpg/Pediatrics";
import Urology from "./pages/Departmentpg/Urology";
import Doctor from "./pages/Doctor";
import Medical from "./pages/Medical";
import Patient from "./pages/Patient";
// import PatientAppointment from "./Components/Patient/PatientAppointment";
import PatientReport from "./Components/Patient/PatientReport";
import PatientRegister from "./pages/DoctorApp/PatientRegister";

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/LoginPageComponent' element={<LoginPageComponent/>} />
      <Route path='/RegistorForm' element={<RegistorForm/>} />
      <Route path="/SideBar"  element={<SideBar/>} />
      <Route path='/' element={<HomePage/>} />
      <Route path='/Cardiologypg' element={<Cardiologypg/>}/>
      <Route path='/CriticalCare' element={<CriticalCare/>}/>
      <Route path='/Dental' element={<Dental/>}/>
      <Route path='/Gastroenterology' element={<Gastroenterology/>}/>
      <Route path='/Physicians' element={<Physicians/>}/>
      <Route path='/Infertility' element={<Infertility/>}/>
      <Route path='/Nephrology' element={<Nephrology/>}/>
      <Route path='/Neurosurgery' element={<Neurosurgery/>}/>
      <Route path='/Gynecology' element={<Gynecology/>}/>
      <Route path='/Orthopaedics' element={<Orthopaedics/>}/>
      <Route path='/Pediatrics' element={<Pediatrics/>}/>
      <Route path='/Urology' element={<Urology/>}/>
      <Route path="/Doctor" element={<Doctor/>}/>
      <Route path='/PatientRegister' element={<PatientRegister/>}/>
      <Route path="/Medical" element={<Medical/>}/>
      <Route path="/Patient" element={<Patient/>}/>
      {/* <Route path='/PatientAppointment' element={<PatientAppointment/>}/> */}
      <Route path='/PatientReport' element={<PatientReport/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
