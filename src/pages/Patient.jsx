import React from "react";
import Navbar from "../Components/SideBar/Navbar";
import '../Css/Patient.css'
import PatientAppointmentimg from '../Assets/img/PatientAppointment.png'
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Patient = () => {
    const END_POINT = `${process.env.REACT_APP_API_ENDPOINT}/PatientAppointment.php`;
    // const DOCTOR_NAME = `${process.env.REACT_APP_API_ENDPOINT}/DoctorAppointment.php`;
    // const [formDataDoctor, setFormDataDoctor] = useState({
    //     doctor:""
    // }); 
    // axios.post(DOCTOR_NAME,(formDataDoctor))
    // .then(response => {
    //     console.log(response)
    // })

    const [formData, setFormData] = useState({
        name:"",
        mail:"",
        phone:"",
        date:"",
        doctor:"",
    });
    const [succMessage, setSuccMessage] = useState(null);
    const handleSubmit = (e) => {
        e.preventDefault();
        // axios.post('http://localhost/miniproject/Backend/PatientAppointment.php' ,(formData))
        axios.post(END_POINT, (formData))
        .then(response => {
        console.log(response);
        console.log(response.data);
        console.log(response.data.message);
        const message = response.data.message;
        if(message === "Success"){
            setFormData({
                name:"",
                mail:"",
                phone:"",
                date:"",
                doctor:"",
            })
            setSuccMessage ('Thankyou for Booking')
        }else{
            setSuccMessage('Enter all the fields')
        }
        }) 
        .catch((error) => {
            console.error(error);
        })
    }

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }
    
    return (
        <>
            <div>
                   <div className="patienthead w-full">
                    <Navbar />
                    
                    <div className="h-screen w-full ml-auto flex items-center justify-end">
                        <div className=" Bookingtext h-[850px] w-[470px] rounded-[32px] border-2 border-slake-400 mt-10 mr-2 ml-2 sm:mr-20 sm:ml-0 sm:mt-7">
                            <h3 className="mt-5 tracking-[2px] font-bold text-lg">Book An Appointment</h3>
                            {succMessage && <div className='text-lg font-semibold tracking-[1px] bg-[#ffcece] w-[300px] mr-auto ml-auto rounded-[12px] mt-2'>{succMessage}</div>}
                            <img className="w-4/12 mr-auto ml-auto mt-5" src={PatientAppointmentimg} alt="PatientAppointment_img" />
                            <div className="mt-0">
                                <div className="mb-4 flex flex-col w-10/12 mr-auto ml-auto text-left">
                                    <label className="font-semibold tracking-[1px] mb-2">Name:</label>
                                    <input className="p-2 border border-slake-400" type="text" placeholder="Enter you name" name="name" onChange={handleChange} value={formData.name}/>
                                </div>
                                <div className="mb-4 flex flex-col w-10/12 mr-auto ml-auto text-left">
                                    <label className="font-semibold tracking-[1px] mb-2">Email:</label>
                                    <input className="p-2 border border-slake-400" type="text" placeholder="Enter your email" name="mail" onChange={handleChange} value={formData.mail}/>
                                </div>
                                <div className="mb-4 flex flex-col w-10/12 mr-auto ml-auto text-left">
                                    <label className="font-semibold tracking-[1px] mb-2">Mobile:</label>
                                    <input className="p-2 border border-slake-400" type="number" placeholder="Enter your mobile number" name="phone" onChange={handleChange} value={formData.phone}/>
                                </div>
                                <div className="mb-4 flex flex-col w-10/12 mr-auto ml-auto text-left">
                                    <label className="font-semibold tracking-[1px] mb-2">DOB:</label>
                                    <input className="p-2 border border-slake-400" type="date" name="date" onChange={handleChange} value={formData.date}/>
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
                                    <select name="doctor" id="" className="p-2 border border-slake-400" onChange={handleChange} value={formData.doctor}>
                                        <option value="">Select a doctor</option>
                                        <option value="Doctor" onChange={handleChange} >Dr.Doctor</option>
                                        <option value="Dr.Madhan" onChange={handleChange} >Dr.Madhan</option>
                                        <option value="Dr.Balaji" onChange={handleChange} >Dr.Balaji</option>
                                        <option value="Dr.Balakannan" onChange={handleChange} >Dr.Balakannan</option>
                                        <option value="Dr.Balakannan" onChange={handleChange} >Dr.Jayachandran</option>
                                    </select>
                                </div>
                                <div>
                                    <button type="submit" name='submit' className='bg-[#78988f] text-white w-6/12 mr-auto ml-auto mt-0 p-3 font-bold tracking-[1px]' style={{ borderRadius: '12px' }} onClick={handleSubmit}>Book</button>
                                    <Link to={'/PatientReport'}>
                                        <p className="tracking-[1px] font-semibold mt-2 text-slate-500 hover:text-blue-600 underline">View your reports </p>
                                    </Link>
                                        
                                    <Link to={'/LoginPageComponent'}>
                                            <h3 className="w-5/12 mr-auto ml-auto pregister text-lg tracking-[1px] font-semibold p-2 rounded-[12px] text-slate-600">Logout</h3>
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>
               
                </div>
            </div>
        </>
    )
}
export default Patient;