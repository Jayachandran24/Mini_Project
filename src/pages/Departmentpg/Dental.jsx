import React from "react";
import Navbar from "../../Components/SideBar/Navbar";
import Footer from "../../Components/Footer/Footer";


const Dental = () => {
    return (
        <>
            <div>
                <div className="cardiologyhead">
                    <Navbar />
                    <div className="h-full text-black tracking-[3px] flex items-end flex-col sm:flex-row">
                        <div className="mt-auto mb-20 ml-20">
                            <h1 className="text-[100px] font-bold">Dental</h1>
                            <p className="text-[20px] font-semibold"> “Do your part, care for your heart.”</p>
                        </div>

                    </div>
                </div>
                <div>
                    <h2 className="border-b-4 border-slack-500 text-4xl font-semibold tracking-[2px] mt-10 mb-20 w-[230px] ml-auto mr-auto p-2">Dental</h2>
                    <div className="w-[70%] ml-auto mr-auto mb-14">
                        <p className="text-left mt-3">GR Dental Clinic is dedicated to providing high quality, world class Dental care with the soft touch of Indian hospitality. We understand that a visit to the dentist can be a stressful experience. Hence we treat each visitor to our clinic not merely as a patient but as an individual. We take time out, not only to understand their needs and expectations, but also to increase the comfort level of a patient by ensuring that the patient understands the necessity for any dental treatment they may undergo, how the dental procedure will work, the level of pain that may be experienced etc.</p>
                        <p className="text-left mt-3">Many clinics may provide you with standard dental care but what sets our clinic apart is our patient-oriented approach. Although we are much focused on the accuracy and success of all dental procedures and processes performed at our clinic, we are very sensitive to the patientâ€™s needs, expectations and most importantly comfort level. Although Prashanth Dental Clinic is internationally known for its Orthodontic treatment, we have a highly qualified team of consultants in various other dental specialities namely Prosthodontics, Maxillo-facial surgery, Periodontics, Implantology, Endodontic etc. This group of dentists works collaboratively in one facility to achieve the best possible outcome for the patient. This ensures decreased time for treatments and maximum cross-disciplinary diagnosis.</p>
                        <h3 className="text-left font-bold tracking-[2px] mt-10 mb-4 text-xl">Comprehensive Cardiac Care:</h3>
                        
                            <p className="text-left mt-3">Skilled team with core expertise in Orthodontics and Dento facial othopaedics</p>
                            <p className="text-left mt-3">Specialists trained in painless, single sitting root canal surgeries â€¦ an experience you will relish</p>
                            <p className="text-left mt-3">Success with over 2000 cases in implantology, cosmetic dentistry,and laser dentistry</p>
                            
                        
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Dental;