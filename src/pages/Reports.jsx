import React from "react";
import Navbar from "../Components/SideBar/Navbar";


const Report = () => {
    return(
        <>
        <div className="bg-slate-600">
            <div>
                <Navbar/>
            </div>
            <div className="w-full h-full">
                <div className="report w-10/12 h-[800px] left-[160px] right-0 mt-24 absolute">
                    <p className="text-start p-5 bg-[#ecd3ff]">No Records Found</p>
                </div>
            </div>
        </div>
        </>
    )
}


export default Report;