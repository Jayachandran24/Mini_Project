import React from "react";
import '../Css/HomePage.css';
import Navbar from "../Components/SideBar/Navbar";
import { Link } from "react-router-dom";
import {BiSolidLogInCircle} from 'react-icons/bi';

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
                            <Link to='/LoginPageComponent' className=" text-white bg-black text-2xl px-4 ml-[130px] py-1 rounded-[12px] font-bold mt-[200px]" style={{letterSpacing:'1px', display:'inline-block'}}>Doctor<span className="flex justify-center"> <BiSolidLogInCircle/></span></Link>
                        </div>
                        <div className="medical">
                            <Link to='/LoginPageComponent' className=" text-white bg-black text-2xl px-4 ml-[130px] py-1 rounded-[12px] font-bold mt-[200px]" style={{letterSpacing:'1px', display:'inline-block'}}>Medical<span className="flex justify-center"> <BiSolidLogInCircle/></span></Link>
                        </div>
                        </div>
                        <div className="patient">
                        <Link to='/LoginPageComponent' className=" text-white bg-black text-2xl px-4 mr-[350px] py-1 rounded-[12px] font-bold mt-[150px]" style={{letterSpacing:'1px', display:'inline-block'}}>Patient<span className="flex justify-center"> <BiSolidLogInCircle/></span></Link>

                        </div>
                    </div>
                    </div>
                    
                    <div className="homepageleft" >
                        <div className=" health w-full h-[90vh] flex justify-start items-end text-black px-5">
                            <div >
                            <h1 className="text-5xl font-bold text-left">'Health</h1>
                            <p className="text-3xl">“A good laugh and a long sleep are the best </p>
                            <p className="text-3xl">cures in the doctor’s book.”</p>
                            </div>
                        </div>
                    </div>
                    <div className="homepageright">
                    <div className=" health w-full  h-[90vh] flex justify-end items-end text-white px-5">
                            <div>
                            <h1 className="text-5xl font-bold text-right">Wellness'</h1>
                            <p className="text-3xl">“A good laugh and a long sleep are the best <br></br>
                             cures in the doctor’s book.”</p>
                            </div>
                        </div>
                    </div>
                </div>


            </div>




        </>
    )
}
export default HomePage;