import React from "react";
import Navbar from "../SideBar/Navbar";
import PatientAppointmentimg from '../../Assets/img/PatientAppointment.png';

const PatientAppointment = () => {
    return (
        <>
            <div>
                <div className=" w-full">
                    <Navbar />
                    <div className="h-screen w-full ml-auto mr-auto flex items-center justify-center">
                        <div className="h-[80vh] bg-[#f3fff7] w-[470px] rounded-[32px] border-2 border-slake-400 mt-7">
                            <h3 className="mt-5 tracking-[2px] font-bold text-lg">Book An Appointment</h3>
                            <img className="w-4/12 mr-auto ml-auto mt-5" src={PatientAppointmentimg} alt="PatientAppointment_img" />
                            <div className="mt-0">
                                <div className="mb-4 flex flex-col w-10/12 mr-auto ml-auto text-left">
                                    <label className="font-semibold tracking-[1px] mb-2">Name:</label>
                                    <input className="p-2 border border-slake-400" type="text" placeholder="Enter you name"/>
                                </div>
                                <div className="mb-4 flex flex-col w-10/12 mr-auto ml-auto text-left">
                                    <label className="font-semibold tracking-[1px] mb-2">Email:</label>
                                    <input className="p-2 border border-slake-400" type="text" placeholder="Enter your email"/>
                                </div>
                                <div className="mb-4 flex flex-col w-10/12 mr-auto ml-auto text-left">
                                    <label className="font-semibold tracking-[1px] mb-2">Mobile:</label>
                                    <input className="p-2 border border-slake-400" type="number" placeholder="Enter your mobile number"/>
                                </div>
                                <div className="mb-4 flex flex-col w-10/12 mr-auto ml-auto text-left">
                                    <label className="font-semibold tracking-[1px] mb-2">DOB:</label>
                                    <input className="p-2 border border-slake-400" type="date" />
                                </div>

                                {/* <label>Specialities</label>
                            <select name="" id="">
                                <option value="">Select a Specialities</option>
                                <option value="Dental">Dental</option>
                                <option value="Ent">Ent</option>
                                <option value="Cardiology">Cardiology</option>
                                <option value="Critical Care">Critical Care</option>
                                <option value="Child Care">Child Care</option>
                                <option value="Cancer">Cancer</option>
                                <option value="Infertility">Infertility</option>
                            </select> */}
                                <div className="mb-7 flex flex-col w-10/12 mr-auto ml-auto text-left">
                                    <label className="font-semibold tracking-[1px] mb-2">Doctor:</label>
                                    <select name="" id="" className="p-2 border border-slake-400">
                                        <option value="">Select a doctor</option>
                                        <option value="">Dr. Jayachandran</option>
                                        <option value="">Dr. Madhan</option>
                                        <option value="">Dr. Balaji</option>
                                        <option value="">Dr. Balakannan</option>
                                    </select>
                                </div>
                                <div>
                                    <button type="submit" name='submit' className='bg-[#78988f] text-white w-6/12 mr-auto ml-auto mt-0 p-3 font-bold tracking-[1px]' style={{ borderRadius: '12px' }}>Book</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}

export default PatientAppointment;