import React from "react";
import Navbar from "../Components/SideBar/Navbar";
import '../Css/Patient.css'
import { Link } from "react-router-dom";

const Patient = () => {
    return (
        <>
            <div>
                <div className="patienthead">
                    <Navbar />
                    <div className=" h-full flex items-center flex-col sm:flex-row">
                        <div className="w-[350px] ml-auto mr-14">
                            <Link to={'/PatientAppointment'}>
                                <h3 className=" pregister text-lg tracking-[1px] font-semibold p-2 rounded-[12px]">Book an Appointment</h3>
                            </Link>
                            <Link to={'/PatientRegister'}>
                                <h3 className=" pregister text-lg tracking-[1px] font-semibold p-2 rounded-[12px]">Register for an Appointment</h3>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Patient;