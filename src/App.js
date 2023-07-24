
import {Routes, Route } from "react-router-dom";
import './App.css';
import RegistorForm from './Components/RegistorForm/RegistorForm';
import LoginPageComponent from './pages/LoginPageComponent';
import HomePage from "./pages/HomePage";
import SideBar from "./Components/SideBar/SideBar";

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/HomePage' element={<HomePage/>} />
      <Route path='/LoginPageComponent' element={<LoginPageComponent/>} />
      <Route path='/RegistorForm' element={<RegistorForm/>} />
      {/* <Route path="HomePage"  element={<HomePage/>} /> */}
      <Route path="/SideBar"  element={<SideBar/>} />
      </Routes>
      
    </div>
  );
}

export default App;
