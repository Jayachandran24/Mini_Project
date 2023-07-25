import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Link } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';

const RegistorForm = () => {

  const [formData, setFormData] = useState({
    name: "",
    location: "",
    email: "",
    password: "",
    phone: "",
    proferssion: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost/miniproject/Backend/RegistorPage/RegistorPage.php', (formData))

      .then(response => {
        console.log(response)
        console.log(response.data)
        console.log(response.data.message)
        // message.success(response.data.message)
      })
      .catch((error) => {
        console.error(error);
        // message.error(error?.data?.error?.message);
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
        <div className='w-[90%] flex gap-10 mt-7 mr-auto ml-auto'>
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
            <button type='submit' name='submit' onClick={handleSubmit} className='bg-[#78988f] text-white w-5/12 mr-auto ml-auto mt-6 p-3 font-bold tracking-[1px]' style={{ borderRadius: '12px' }}>Registor</button>
          </div>
          <div className='w-full'>
            <div className='flex justify-evenly items-center h-[60px]'>
              <div>
                <input type="radio" name="proferssion" value={"Doctor"} onChange={handleChange} />
                <label className='tracking-[1px] ml-2'>Doctor</label>
              </div>
              <div>
                <input type="radio" name="proferssion" value={"Medical"} onChange={handleChange} />
                <label className='tracking-[1px] ml-2'>Medical</label>
              </div>
              <div>
                <input type="radio" name="proferssion" value={"Patient"} onChange={handleChange} />
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