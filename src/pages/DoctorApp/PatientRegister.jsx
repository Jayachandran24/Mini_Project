import React, { useState } from "react";
import Navbar from "../../Components/SideBar/Navbar";
import Input from "../../Components/Input/Input";
import axios from "axios";

const PatientRegister = () => {
    const END_POINT = `${process.env.REACT_APP_API_ENDPOINT}/PatientRegister.php`;
    const [formData, setFormData] = useState({
        name:"",
        age : "",
        gender:"male",
        weight:"",
        sugar:"",
        bp:"",
        fever:"",
        symptoms:"",
        problem:"",
        others:"",
    });
    const [succMessage, setSuccMessage] = useState(null);

    // const validate = (formValues) => {
    //   if(!formValues.name || !formValues.age || !formValues.weight || !formValues.sugar || !formValues.bp || !formValues.fever|| !formValues.symptoms || !formValues.password|| !formValues.weight || !formValues.password
    //     || !formValues.problem || !formValues.others){
    //       setSuccMessage('Please fill the all fields *')
    //       return false;
    //     }
    //     return true;
    // }
    const handleSubmit = (e) => {
        e.preventDefault();
        // axios.post('http://localhost/miniproject/Backend/PatientRegister.php',(formData))
        axios.post(END_POINT, (formData))

        .then(response => {
            const message = response.data.message;
            console.log("message :" + message);
            // if(!validate(formData)) return;
            // setSuccMessage('');
            if(message === "Success"){
                setFormData({
                    name:"",
                    age : "",
                    gender:"male",
                    weight:"",
                    sugar:"",
                    bp:"",
                    fever:"",
                    symptoms:"",
                    problem:"",
                    others:"",
                })
                setSuccMessage (
                    'Form submitted successfully!');
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
            <div className="bg-slate-600">
                <div>
                    <Navbar />
                </div>
                <div className="w-full h-full">
                    <div className="report w-10/12 h-[800px] left-[160px] right-0 mt-24 absolute">
                    {succMessage && <div className='text-lg font-semibold tracking-[1px] bg-[#e5f7f2] p-2 w-[500px] mr-auto ml-auto rounded-[12px]'>{succMessage}</div>}

                        <h3 className="font-semibold tracking-[2px] text-2xl mt-5">Patient Registor</h3>
                        <div className="flex justify-evenly">
                            <div className="w-10/12">
                                <Input label='Name:' type='text' name='name' value={formData.name} onchange={handleChange}/>
                                {/* <Input label='Gender:' type='text' name='gender' value='' /> */}
                                <div className="mt-10 sm:w-9/12">
                                    <p className="font-semibold tracking-[1px] mb-2 text-left ml-24">Gender:</p>
                                    <div className="mb-7 flex flex-row  w-full mr-auto ml-auto text-left sm:w-9/12  mt-0 justify-evenly">
                                        <div>
                                        <input type="radio" name="gender" value={"male"} onchange={handleChange}/>
                                        <label className="font-semibold tracking-[1px] mb-2 ml-2">Male</label>
                                        </div>
                                        <div>
                                        <input type="radio" name="gender" value={"female"} onchange={handleChange}/>
                                        <label className="font-semibold tracking-[1px] mb-2 ml-2">Female</label>
                                        </div>
                                        <div>
                                        <input type="radio" name="gender" value={"transgender"} onchange={handleChange}/>
                                        <label className="font-semibold tracking-[1px] mb-2 ml-2">Transgender</label>
                                        </div>
                                    </div>
                                </div>
                                <Input label='Sugar (mg/dl):' type='text' name='sugar' value={formData.sugar} onchange={handleChange}/>
                                <Input label='Fever (in C):' type='number' name='fever' value={formData.fever} onchange={handleChange}/>
                                <Input label='Facing Problem:' type='text' name='problem' value={formData.problem} onchange={handleChange}/>
                            </div>
                            <div className="w-10/12">
                                <Input label='Age:' type='number' name='age' value={formData.age} onchange={handleChange}/>
                                <Input label='Weight (kg):' type='number' name='weight' value={formData.weight} onchange={handleChange}/>
                                <Input label='BP (mmHg):' type='number' name='bp' value={formData.bp} onchange={handleChange}/>
                                <Input label='Symptoms:' type='text' name='symptoms' value={formData.symptoms} onchange={handleChange}/>
                                <Input label='Others:' type='text' name='others' value={formData.others} onchange={handleChange}/>
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