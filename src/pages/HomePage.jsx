import React from "react";
import '../Css/HomePage.css';
import Navbar from "../Components/SideBar/Navbar";
import { Link } from "react-router-dom";
import { BiSolidLogInCircle } from 'react-icons/bi';
import hospital1 from '../Assets/img/hospital1.jpg';
import hospital2 from '../Assets/img/hospital2.jfif';
import hospital3 from '../Assets/img/hospital3.jfif';
import Facility from "../Components/Facility/Facility";
import Department from "../Components/Departments/Departments";
const HomePage = () => {
    return (
        <>
            <div>
                <div className="navbar">
                    <Navbar />
                    {/* <SideBar /> */}
                </div>
                <div className="homepage w-full flex">
                    <div className="selectlogin">
                        <div className="circle">
                            <div className="flex">

                                <div className="doctor">
                                    <Link to='/LoginPageComponent' className=" text-white bg-black text-2xl px-4 ml-[130px] py-1 rounded-[12px] font-bold mt-[200px]" style={{ letterSpacing: '1px', display: 'inline-block' }}>Doctor<span className="flex justify-center"> <BiSolidLogInCircle /></span></Link>
                                </div>
                                <div className="medical">
                                    <Link to='/LoginPageComponent' className=" text-white bg-black text-2xl px-4 ml-[130px] py-1 rounded-[12px] font-bold mt-[200px]" style={{ letterSpacing: '1px', display: 'inline-block' }}>Medical<span className="flex justify-center"> <BiSolidLogInCircle /></span></Link>
                                </div>
                            </div>
                            <div className="patient">
                                <Link to='/LoginPageComponent' className=" text-white bg-black text-2xl px-4 mr-[350px] py-1 rounded-[12px] font-bold mt-[100px]" style={{ letterSpacing: '1px', display: 'inline-block' }}>Patient<span className="flex justify-center"> <BiSolidLogInCircle /></span></Link>

                            </div>
                        </div>
                    </div>

                    <div className="homepageleft" >
                        <div className=" health w-full h-[90vh] flex justify-start items-end text-black px-5">
                            <div >
                                <h1 className="text-5xl font-bold text-left">'Health</h1>
                                <p className="text-xl">“A good laugh and a long sleep are the best </p>
                                <p className="text-xl">cures in the doctor’s book.”</p>
                            </div>
                        </div>
                    </div>
                    <div className="homepageright">
                        <div className=" health w-full  h-[90vh] flex justify-end items-end text-white px-5">
                            <div>
                                <h1 className="text-4xl font-bold text-right">Wellness'</h1>
                                <p className="text-xl">“A good laugh and a long sleep are the best <br></br>
                                    cures in the doctor’s book.”</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-10">
                    <h3 className="text-3xl tracking-[1px] font-bold">Our Services</h3>
                    <p className=" health text-2xl tracking-[1px] mt-10">Health is not valued till sickness comes.</p>
                    <p className="text-left mt-10 ml-5 mb-5 text-slate-400">Flip to see address</p>
                    <div className="flex w-full justify-evenly items-center">
                        <div className="flip w-[500px] h-[300px]">
                            <div className="flip-inner">
                                <div className="front">
                                    <img className='w-[500px] h-[350px]' src={hospital1} alt="hospital1" />
                                </div>
                                <div className="back border border-slate-300 text-2xl p-7">
                                    <h4 className="mb-5">Location: Chennai</h4>
                                    <p>No. 199, Near VSP Super Market, Chromepet,<br /> Chennai - 600031 </p>
                                </div>
                            </div>
                        </div>
                        <div className="flip w-[500px] h-[300px]">
                            <div className="flip-inner">
                                <div className="front ">
                                    <img className='w-[500px] h-[350px]' src={hospital2} alt="hospital2" />
                                </div>
                                <div className="back border border-slate-300 text-2xl p-7">
                                    <h4 className="mb-5">Location: Chennai</h4>
                                    <p>No. 129, Near VR Mall, Anna Nagar,<br /> Chennai - 600031 </p>
                                </div>
                            </div>
                        </div>
                        <div className="flip w-[500px] h-[300px]">
                            <div className="flip-inner">
                                <div className="front ">
                                    <img className='w-[500px] h-[350px]' src={hospital3} alt="hospital3" />
                                </div>
                                <div className="back border border-slate-300 text-2xl p-7">
                                    <h4 className="mb-5">Location: Chennai</h4>
                                    <p>No. 299, Valluvar salai, TNagar,<br /> Chennai - 600031 </p>
                                </div>
                            </div>
                        </div>



                    </div>
                </div>
                <Facility/>
                <Department/>


            </div>




        </>
    )
}
export default HomePage;