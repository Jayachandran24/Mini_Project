import React, { useState } from "react";
import Navbar from "../../Components/SideBar/Navbar";
import Input from "../../Components/Input/Input";
import axios from "axios";

const PatientRegister = () => {
    const [formData, setFormData] = useState({
        name:"",
        age : "",
        weight:"",
        sugar:"",
        bp:"",
        fever:"",
        symptoms:"",
        problem:"",
        others:"",
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost/miniproject/Backend/PatientRegister/PatientRegister.php',(formData))

        .then(response => {
            console.log(response);
            console.log(response.data);
            console.log(response.data.message);
        })
        .catch((error) => {
            console.error(error);
        })
    }
    // const handleChange = (e) => {
    //     setFormData(prev => ({
    //       ...prev,
    //       [e.target.name]: e.target.value
    //     }))
    //   }

    return (
        <>
            <div className="bg-slate-600">
                <div>
                    <Navbar />
                </div>
                <div className="w-full h-full">
                    <div className="report w-10/12 h-[800px] left-[160px] right-0 mt-24 absolute">
                        {/* <p className="text-start p-5 bg-[#ecd3ff]">No Records Found</p> */}
                        <h3 className="font-semibold tracking-[2px] text-2xl mt-5">Patient Registor</h3>
                        <div className="flex justify-evenly">
                            <div className="w-10/12">
                                <Input label='Name:' type='text' name='name' value={formData.name}/>
                                {/* <Input label='Gender:' type='text' name='gender' value='' /> */}
                                <div className="mt-10 sm:w-9/12">
                                    <p className="font-semibold tracking-[1px] mb-2 text-left ml-24">Gender:</p>
                                    <div className="mb-7 flex flex-row  w-full mr-auto ml-auto text-left sm:w-9/12  mt-0 justify-evenly">
                                        <div>
                                        <input type="radio" name="gender" value={'male'} />
                                        <label className="font-semibold tracking-[1px] mb-2 ml-2">Male</label>
                                        </div>
                                        <div>
                                        <input type="radio" name="gender" value={'female'} />
                                        <label className="font-semibold tracking-[1px] mb-2 ml-2">Female</label>
                                        </div>
                                        <div>
                                        <input type="radio" name="gender" value={'transgender'} />
                                        <label className="font-semibold tracking-[1px] mb-2 ml-2">Transgender</label>
                                        </div>
                                    </div>
                                </div>
                                <Input label='Sugar (mg/dl):' type='text' name='sugar' value={formData.sugar} />
                                <Input label='Fever (in C):' type='number' name='fever' value={formData.fever} />
                                <Input label='Facing Problem:' type='text' name='problem' value={formData.problem} />
                            </div>
                            <div className="w-10/12">
                                <Input label='Age:' type='number' name='age' value='' />
                                <Input label='Weight (kg):' type='number' name='weight' value={formData.weight} />
                                <Input label='BP (mmHg):' type='number' name='bp' value={formData.bp} />
                                <Input label='Symptoms:' type='text' name='symptoms' value={formData.symptoms} />
                                <Input label='Others:' type='text' name='others' value={formData.others} />
                            </div>
                        </div>
                        <button type='submit' name='submit' className='bg-[#78988f] text-white w-6/12 mr-auto ml-auto mt-10 p-3 font-bold tracking-[1px]' style={{ borderRadius: '12px' }} onClick={handleSubmit} >Register</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PatientRegister;