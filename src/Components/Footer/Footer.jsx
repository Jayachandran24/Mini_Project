import { Divider } from "@mui/material";
import React from "react";


const Footer = () =>{
    return(
        <>
            <div className="bg-[#353535] text-white text-xs ">
                <h1>.</h1>
                <p>.</p>
                <p>.</p>
                <p>.</p>
                <p>.</p>
                <p>.</p>
                <p>.</p>
                <p>.</p>
                <p>.</p>
                <p>.</p>
                <p>.</p>
                <p>.</p>
                <p>.</p>
                <p>.</p>
                <p>.</p>
                <p>.</p>
                <p>.</p>
                <p>.</p>
                <p>.</p>
                <p>.</p>
                <p>.</p>
                <p>.</p>
                <Divider className="bg-white"/>
                <div className="flex justify-evenly">
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