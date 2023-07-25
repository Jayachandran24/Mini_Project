import React from "react";
import Department_list from "../Department_list/Department_list";
import Cardiology from '../../Assets/img/Department/cardiology.png';
import CriticalCare from '../../Assets/img/Department/hospital-bed.png';
import Dental from '../../Assets/img/Department/tooth.png';
import Gastroenterology from '../../Assets/img/Department/stomach.png';
import Physicians from '../../Assets/img/Department/gp.png';
import Infertility from '../../Assets/img/Department/infertility.png';
import Nephrology from '../../Assets/img/Department/kidney.png';
import Neurosurgery from '../../Assets/img/Department/neurology.png';
import Obstetrics from '../../Assets/img/Department/baby.png';
import Orthopaedics from '../../Assets/img/Department/ortopedic.png';
import Pediatrics from '../../Assets/img/Department/pediatrician.png';
import Urology from '../../Assets/img/Department/kidney (1).png';

const Department = () => {
    return (
        <>
            <div className="mt-5 mb-5">
                <h3 className="text-3xl tracking-[1px] font-bold">Departments</h3>
                <div className="mt-10">
                    <div>
                        <div className="flex justify-evenly">
                            <Department_list link='/Cardiologypg' icon={Cardiology} Heading='Cardiology'/>
                            <Department_list link='/CriticalCare' icon={CriticalCare} Heading='Critical Care'/>
                            <Department_list link='/Dental' icon={Dental} Heading='Dental'/>
                            <Department_list link='/Gastroenterology' icon={Gastroenterology} Heading='Gastroenterology'/>
                        </div>
                        <div className="flex justify-evenly">
                            <Department_list link='/Physicians' icon={Physicians} Heading='General Physicians'/>
                            <Department_list link='/Infertility' icon={Infertility} Heading='Infertility'/>
                            <Department_list link='/Nephrology' icon={Nephrology} Heading='Nephrology'/>
                            <Department_list link='/Neurosurgery' icon={Neurosurgery} Heading='Neurology & Neurosurgery'/>
                        </div>
                        <div className="flex justify-evenly">
                            <Department_list link='/Gynecology' icon={Obstetrics} Heading='Obstetrics & Gynecology'/>
                            <Department_list link='/Orthopaedics' icon={Orthopaedics} Heading='Orthopaedics'/>
                            <Department_list link='/Pediatrics' icon={Pediatrics} Heading='Pediatrics'/>
                            <Department_list link='/Urology' icon={Urology} Heading='Urology Surgery'/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Department;