import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Link } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';

const RegistorForm = () => {
  const [showModal, setShowModal] = useState(false);
  const END_POINT = `${process.env.REACT_APP_API_ENDPOINT}/RegistorPage.php`;
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    email: "",
    password: "",
    phone: "",
    proferssion: "",
    docname:"",
  });
  const [succMessage, setSuccMessage] = useState(null);

  const validate = (formValues) => {
    if(!formValues.name || !formValues.location || !formValues.email || !formValues.password
      || !formValues.phone || !formValues.proferssion){
        setSuccMessage('Please fill the all fields *')
        return false;
      }
      return true;
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    // axios.post('http://localhost/miniproject/Backend/RegistorPage.php', (formData))
    axios.post(END_POINT, (formData))

      .then(response => {
        console.log(response)
        console.log(response.data)
        console.log("message:" + response.data.message)
        const message = response.data.message;
        // const error_message = response.data.error_message;
        if(!validate(formData)) return;
        setSuccMessage('');
        if(message === "Success"){
          setFormData (
            {
            name:"",
            location: "",
            email: "",
            password: "",
            phone: "",
            proferssion: "",
            docname:"",
          })
          setSuccMessage (
            'Form submitted successfully!');
        }
        // else if (error_message === "wrong input"){
        //   setSuccMessage('Enter all the fields');
        // }
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
    <Box
      width={'100%'}
      component="form"
      Validate
      autoComplete="off"
    >
      <h1 className='mt-10 font-bold text-3xl'>Registration Form</h1>
      <div className='mt-20'>
      {succMessage && <div className='text-lg font-semibold tracking-[1px] bg-[#e5f7f2] p-2 w-[500px] mr-auto ml-auto rounded-[12px]'>{succMessage}</div>}
        <div className='w-[90%] flex gap-10 mt-10 mr-auto ml-auto'>
          <div className='w-full'>
            <TextField
              required
              id="outlined-required"
              label="Name"
              style={{ width: '100%' }}
              name='name'
              onChange={handleChange} value={formData.name}
            />
          </div>
          <div className='w-full'>
            <TextField
              required
              id="outlined-disabled"
              label="Location"
              style={{ width: '100%' }}
              autoComplete='off'
              name='location'
              onChange={handleChange} value={formData.location}
            />
          </div>

        </div>
        <div className='w-[90%] flex gap-10 mt-7 mr-auto ml-auto'>
          <div className='w-full'>
            <TextField
              required
              id="outlined-password-input"
              label="Email"
              type="email"
              // autoComplete="current-password"
              autoComplete="off"
              style={{ width: '100%' }}
              name='email'
              onChange={handleChange} value={formData.email}
            />
          </div>
          <div className='w-full'>
            <TextField
              required
              id="outlined-read-only-input"
              label="Create Password"
              type="password"
              // InputProps={{
              //   readOnly: true,
              // }}
              style={{ width: '100%' }}
              name='password'
              onChange={handleChange} value={formData.password}
            />
          </div>
        </div>
        <div className='w-[90%] flex gap-10 mt-7 mr-auto ml-auto'>
          <div className='w-full'>
            <TextField
              required
              id="outlined-number"
              label="Phone"
              type="number"
              // InputLabelProps={{
              //   shrink: true,
              // }}
              style={{ width: '100%' }}
              name='phone'
              onChange={handleChange} value={formData.phone}
            />
            <Button type='submit' buttonName='Registor'  onclick={handleSubmit} className='bg-[#78988f] text-white w-5/12 mr-auto ml-auto mt-6 p-3 font-bold tracking-[1px]' style={{ borderRadius: '12px' }}/>
            {/* <button type='submit' name='submit' onClick={handleSubmit} className='bg-[#78988f] text-white w-5/12 mr-auto ml-auto mt-6 p-3 font-bold tracking-[1px]' style={{ borderRadius: '12px' }}>Registor</button> */}
          </div>
          <div className='w-full'>
            <div className='flex justify-evenly items-center h-[60px]'>
              <div>
                <button type='button' onClick={() => setShowModal(true)}>
                <input type="radio" name="proferssion" value={"Doctor"} onChange={handleChange} />
                </button>
                <label className='tracking-[1px] ml-2'>Doctor</label>
              </div>
              {showModal && <Modal type='text' placeholder='Eg: Dr.___' className='border border-slate-400 p-1' onchange={handleChange} name="docname" value={formData.docname}/>}
              <div>
              <button type='button' onClick={() => setShowModal(false)}>
                <input type="radio" name="proferssion" value={"Medical"} onChange={handleChange} />
                </button>
                <label className='tracking-[1px] ml-2'>Medical</label>
              </div>
              <div>
              <button type='button' onClick={() => setShowModal(false)}>
                <input type="radio" name="proferssion" value={"Patient"} onChange={handleChange} />
                </button>
                <label className='tracking-[1px] ml-2'>Patient</label>
              </div>
            </div>
            <div className='bg-[#78988f] text-white w-5/12 mr-auto mt-6 ml-auto p-3 font-bold tracking-[1px]' style={{ borderRadius: '12px' }}>
              <Link to="/LoginPageComponent"> <span>Back to Login</span></Link>
            </div>
          </div>
        </div>
        
        
      </div>


    </Box>
  );
}
export default RegistorForm;