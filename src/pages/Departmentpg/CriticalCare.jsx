import React from "react";
import Navbar from "../../Components/SideBar/Navbar";
import Footer from "../../Components/Footer/Footer";


const CriticalCare = () => {
    return(
        <>
        <div>
            <div className="cardiologyhead">
                <Navbar/>
                <div className="h-full text-black tracking-[3px] flex items-end flex-col sm:flex-row">
                    <div className="mt-auto mb-20 ml-20">
                    <h1 className="text-[100px] font-bold">CriticalCare</h1>
                    <p className="text-[20px] font-semibold"> “Do your part, care for your heart.”</p>
                    </div>
                    
                </div>
            </div>
            <div>
            <h2 className="border-b-4 border-slack-500 text-4xl font-semibold tracking-[2px] mt-10 mb-20 w-[230px] ml-auto mr-auto p-2">CriticalCare</h2>
            <div className="w-[70%] ml-auto mr-auto mb-14">
                    <p className="text-left">The Critical Care Unit at <span className="font-semibold">GR Super speciality Hospital, Chennai,</span> is a multidisciplinary unit where patients with medical, cardiac or surgical problems are managed. The primary goal of the CCU is to provide high quality care to patients who require close monitoring and nursing care. The Critical Care team are in constant touch with the primary consultants to update them and provide necessary care to the patients. The Department aims at providing acute care for those patients who are generally unstable, critically ill and those in urgent need of advanced monitoring and intensive treatments. The full spectrum of Medical, Cardiac, Surgery and trauma critical care services are extended by this team. The Physicians are highly skilled and specialized in diverse specialities of Medicine and Surgery. Good nursing care is provided to meet the psychological, physical and emotional needs of the patient.</p>
                    </div>
            </div>
            <Footer/>
        </div>
        </>
    )
}

export default CriticalCare;