import React from "react";
import Department_list from "../Department_list/Department_list";
import {BsFillHeartPulseFill} from "react-icons/bs";

const Department = () => {
    return (
        <>
            <div className="mt-5">
                <h3 className="text-3xl tracking-[1px] font-bold">Department</h3>
                <div className="mt-10">
                    <div>
                        <div className="flex justify-evenly">
                            <Department_list icon={<BsFillHeartPulseFill/>} Heading='Cardiology'/>
                            <Department_list Heading='Critical Care'/>
                            <Department_list Heading='Dental'/>
                            <Department_list Heading='Gastroenterology'/>
                        </div>
                        <div className="flex justify-evenly">
                            <Department_list Heading='General Physicians'/>
                            <Department_list Heading='Infertility'/>
                            <Department_list Heading='Nephrology'/>
                            <Department_list Heading='Neurology & Neurosurgery'/>
                        </div>
                        <div className="flex justify-evenly">
                            <Department_list Heading='Obstetrics & Gynecology'/>
                            <Department_list Heading='Orthopaedics'/>
                            <Department_list Heading='Pediatrics'/>
                            <Department_list Heading='Urology Surgery'/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Department;