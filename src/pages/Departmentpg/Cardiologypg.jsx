import React from "react";
import Navbar from "../../Components/SideBar/Navbar";
import '../../Css/Departmentpg.css'
import { Divider } from "@mui/material";
import Footer from "../../Components/Footer/Footer";


const Cardiologypg = () => {
    return (
        <>
            <div>
                <div className="cardiologyhead">
                    <Navbar />
                    <div className="h-full text-black tracking-[3px] flex items-end flex-col sm:flex-row">
                        <div className="mt-auto mb-20 ml-20">
                            <h1 className="text-[100px] font-bold">Cardiology</h1>
                            <p className="text-[20px] font-semibold"> “Do your part, care for your heart.”</p>
                        </div>

                    </div>
                </div>
                <div>
                    <h2 className="border-b-4 border-slack-500 text-4xl font-semibold tracking-[2px] mt-10 mb-20 w-[230px] ml-auto mr-auto p-2">Cardiology</h2>
                    <div className="w-[70%] ml-auto mr-auto">
                        <h3 className="text-left font-bold tracking-[2px] mb-4 text-xl">Delivering world-class cardiac care</h3>
                        <p className="text-left">GR Foundation (GRF) has been founded with the aim of providing world-class comprehensive cardiac care with the best heart specialists in Chennai backed by high technology support to perform all kinds of procedures from interventional to complex cardiac surgeries. GRF is home to some of the best Cardiologist in Chennai who offer quality cardiac care services to domestic as well as international patients. We are at the top of heart care with the experience, expertise, and excellence.</p>
                        <p className="text-left mt-2"> GRF, which is the best heart hospital in Chennai, is equipped with a 24 x 7 state-of-the-art 3rd generation Cath Lab, EP lab and dedicated Cardiac Care Unit (CCU) to diagnose and treat a wide spectrum of heart problems with emergency outpatient and inpatient set up. GRF also has a 2nd generation flat detector with a spectra beam with the highest X-Ray radiation safety for the patients and staff. Our team of experts focuses on offering a full range of both diagnostic and therapeutic interventional cardiology procedures to patients suffering from all types of heart-related issues. We offer the latest in cardiology techniques, drugs, and interventions - making us one of the best cardiac hospitals in Chennai.</p>
                        <p className="text-left mt-2">GRF provides continuum care for the prevention, treatment, recovery & rehabilitation of heart and vascular diseases. We perform the most advanced cardiac surgeries with excellent immediate and long term outcomes. Whether it is a newborn with a complex anomaly of the heart or an adult requiring bypass surgery or valve replacement, our outcomes are on par with the best centers worldwide. We ensure that each patient under our care has access to fast, effective, and safe treatment for heart attack and all other complicated cardiac issues. We have extensive experience in every aspect of cardiac care ranging from angiography, echocardiography, and heart transplantation to advanced clinical research for cardiac rehabilitation, heart failure, and preventive cardiology.</p>

                        <h3 className="text-left font-bold tracking-[2px] mt-10 mb-4 text-xl">Comprehensive Cardiac Care:</h3>
                        <ul className="text-left">
                            <li>- 24 x 7 Heart Care Center,</li>
                            <li>- Top cardiologists in Chennai to diagnose and treat all cardiac emergencies,</li>
                            <li>- State-of-the-art Cath lab with a ceiling-mounted advanced Philips Allure FD10 for precision and accuracy,</li>
                            <li>- Excellent Electro Physio lab to diagnose and treat palpitation and slow heartbeat,</li>
                            <li>- Best Cardiology Hospital in Chennai,</li>
                            <li>- Collaborative Care.</li>
                        </ul>
                        <p className="mt-5 text-left">GRF is dynamic & innovative, dedicated to providing the best cardiac care, giving people hope for a healthier and happier future. Some of the best cardiology doctors in Chennai are always available at GRF to provide consultation and treatment for all aspects of cardiovascular care and prevention. Our technology-driven infrastructure, coupled with the best heart specialists in Chennai and an efficient team supported by cutting edge technology has made us one of the top 10 heart hospitals in Chennai.</p>
                    </div>

                </div>
                <div>
                    <h2 className="border-b-4 border-slack-500 text-4xl font-semibold tracking-[2px] mt-10 mb-10 w-[500px] ml-auto mr-auto p-2">Heart Disease Symptoms</h2>
                    <div className="w-[70%] ml-auto mr-auto mb-14">
                        <p className="text-left">The heart, without a shadow of a doubt, is one of the body's hardest-working organs. It continuously beats at a rate of over one hundred thousand per day. The health of this vital organ must be prioritized. Common signs of heart disease include:</p>
                        <p className="text-left mt-3"><span className="font-bold tracking-[2px]">Shortness of breath</span> - Patients suffering from heart disease frequently report experiencing difficulty breathing or shortness of breath. When you exert yourself physically and find it difficult to breathe, it could be an indication of a problem with the heart valves, or it could be the result of inflammation and a weakening of the heart muscle.</p>
                        <p className="text-left mt-3"><span className="font-bold tracking-[2px]">Chest pain</span> - Chest pain is a common symptom of a heart attack or coronary artery disease. The type and duration of chest pain indicate the presence of underlying heart disease. Pain can be temporary, constant, stabbing, or sharp. It can be remains from a few seconds to several hours.</p>
                        <p className="text-left mt-3"><span className="font-bold tracking-[2px]">Swelling in feet</span> - Swelling in the feet and ankles occurs in people with congestive heart failure due to a decrease in the heart's blood pumping capacity. As a result, the kidneys respond by retaining more fluid in the body. The fluid begins to build up in the feet and other parts of the body.</p>
                        <p className="text-left mt-3"><span className="font-bold tracking-[2px]">Cold sweat</span> - A person who is at risk of having a heart attack may begin sweating profusely without any obvious physical exertion. Heart failure causes overstimulation of the sympathetic nervous system, which causes sweating.</p>
                        <p className="text-left mt-3"><span className="font-bold tracking-[2px]">Tiredness or fatigue</span>- The symptoms of heart disease differ between men and women. Unexplained tiredness and fatigue are common symptoms of heart failure/heart attack in women. Fatigue is also common in older people with diabetes who have heart disease.</p>
                        <p className="text-left mt-3"><span className="font-bold tracking-[2px]">Irregular pulse rate/palpitations</span>- When people go to see a cardiologist, one of the most common complaints they have is of having a rapid pulse rate or a strong heartbeat. When other symptoms, such as shortness of breath, weakness, and sweating, are present along with palpitations, this could point to a problem with the heart.</p>
                        <p className="text-left mt-3"><span className="font-bold tracking-[2px]">Pain in the hand</span> - Pain in the shoulder, which may be intermittent or constant, and which may radiate to the entire left arm and even the back, may be experienced by some people.</p>
                        <p className="text-left mt-3"><span className="font-bold tracking-[2px]">Loss of consciousness</span>- Sudden unconsciousness is an emergency that requires immediate medical attention.</p>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Cardiologypg;