import React from "react";
import Navbar from "../Components/SideBar/Navbar";
import { Link } from "react-router-dom";

const Medical = () => {
    return(
        <>
        <div>
            <div className="patienthead">
                <Navbar />
                <div className=" h-full flex items-center flex-col sm:flex-row">
                    <div className="w-[350px] ml-auto mr-14">
                        {/* <Link to={'/PatientAppointment'}>
                            <h3 className=" pregister text-lg tracking-[1px] font-semibold p-2 rounded-[12px]">All Patient</h3>
                        </Link>
                        <Link to={'/PatientRegister'}>
                            <h3 className=" pregister text-lg tracking-[1px] font-semibold p-2 rounded-[12px]">Register for New Patient</h3>
                        </Link> */}
                        <Link to={'/Report'}>
                            <h3 className=" pregister text-lg tracking-[1px] font-semibold p-2 rounded-[12px]">Reports</h3>
                        </Link>
                        <Link to={'/LoginPageComponent'}>
                            <h3 className=" pregister text-lg tracking-[1px] font-semibold p-2 rounded-[12px] text-slate-600">Logout</h3>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Medical;