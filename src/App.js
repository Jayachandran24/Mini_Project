
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import RegistorForm from './Components/RegistorForm/RegistorForm';
import LoginPageComponent from './pages/LoginPageComponent';
import HomePage from "./pages/HomePage";
import SideBar from "./Components/SideBar/SideBar";
// import LoginPageComponent from './pages/LoginPageComponent';

function App() {
  return (
    <div className="App">
      {/* <LoginPageComponent/> */}
      {/* <RegistorForm/> */}
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='LoginPageComponent' element={<LoginPageComponent/>} />
      <Route path='RegistorForm' element={<RegistorForm/>} />
      <Route path="HomePage"  element={<HomePage/>} />
      <Route path="SideBar"  element={<SideBar/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
