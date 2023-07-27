import { Divider } from "@mui/material";
import React from "react";
import Logo from '../../Assets/img/logo.png';
import { Link } from "react-router-dom";


const Footer = () =>{
    return(
        <>
            <div className="bg-[#353535]">
                <div className="flex justify-center items-center mb-10">
                    <a href="/">
                <img className="w-[200px] h-[200px]" src={Logo} alt="" /></a>
                <h1 className="hospitalname text-white text-[200px] ml-10">GR Hospital</h1>
                </div>
                {/* <Divider className="bg-white"/> */}
                <div className="flex justify-evenly text-xs tracking-[2px] font-semibold text-white py-5">
                    <div className="flex justify-evenly"> 
                        <a href="mailto:info.grhospitals.org">info.grhospitals.org |</a>
                        <p className="ml-3"> 087589 47210 |</p>
                        <p className="ml-3">044 - 27154455</p>
                    </div>
                    <div>
                        <p>No.36 & 36A, Velachery Main Road, Velachery, Chennai – 600 042.</p>
                    </div>
                    <div>
                        <p>© 2021 GR Hospitals. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;