import React from "react";
import '../SideBar/Navbar.css'
import Logo from '../../Assets/img/logo.png';

const Navbar = () => {
    return (
        <>
        <div className="Nav w-full fixed flex justify-center">
            <div className="Navbar flex justify-center items-center">
            <a href="/">
            <img className="w-[65px] h-[65px]" src={Logo} alt="Logo" />
            </a>
            <h1>GR Hospital</h1>
            </div>
            
        </div>
            
        </>
    )
}

export default Navbar;