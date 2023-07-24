import React from "react";
import '../Facility/Facility.css';
import Facility_list from "../Facility_list/Facility_list";
import {FaHandHoldingMedical} from 'react-icons/fa';
import {FaHouseMedicalFlag} from 'react-icons/fa6';
import {MdMedicalServices} from 'react-icons/md';
import {IoFastFood} from 'react-icons/io5';
import {FaInternetExplorer} from 'react-icons/fa6';
import {BiSolidBank} from 'react-icons/bi';

const Facility = () => {
    return (
        <>
            <div className="mt-[140px]">
                <h3 className="text-3xl tracking-[1px] font-bold">Facilities</h3>
                {/* <p className=" health text-2xl tracking-[1px] mt-10">Celebrities are not health experts.</p> */}
                <div className="flex justify-evenly mt-20 ">
                    <div>
                        <Facility_list icon= {<FaHandHoldingMedical/>} Heading='24 Hours Support' Contant = 'Emergency , Accident and Trauma Care' />
                        <Facility_list icon= {<FaHouseMedicalFlag/>} Heading ='House Keeping' Contant = 'House keeping services provided round the clock.'/>
                        <Facility_list icon= {<MdMedicalServices/>} Heading ='24-Hour Pharmacy' Contant = 'Understanding the importance of on-time drugs, we offer 24-hour pharmacy services with highly qualified pharmacists.'/>
                    </div>
                    <div>
                        <Facility_list icon= {<IoFastFood/>} Heading ='Canteen' Contant= 'Canteen services available at reasonable rates.'/>
                        <Facility_list icon={<FaInternetExplorer/>} Heading='Internet' Contant = 'Internet facility available at a reasonable cost.'/>
                        <Facility_list icon={<BiSolidBank/>} Heading = 'Bank & ATM' Contant = 'A full-fledged bank and ATM facility is available near the hospital premises.' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Facility;