import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

 const RegistorForm = () => {
  return (
    <Box
    width={'100%'}
      component="form"
      // sx={{
      //   '& .MuiTextField-root': { m: 1, width: '25ch' },
      // }}
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
          style={{width:'100%'}}
        />
          </div>
        <div className='w-full'>
        <TextField
          required
          id="outlined-disabled"
          label="Email"
          style={{width:'100%'}}
          autoComplete='off'
        />
        </div>

        </div>
        <div className='w-[90%] flex gap-10 mt-7 mr-auto ml-auto'>
          <div className='w-full'>
        <TextField
        required
          id="outlined-password-input"
          label="Create Password"
          type="password"
          // autoComplete="current-password"
          autoComplete="off"
          style={{width:'100%'}}
        />
        </div>
        <div className='w-full'>
        <TextField
        required
          id="outlined-read-only-input"
          label="Confirm Password"
          type="password"
          // InputProps={{
          //   readOnly: true,
          // }}
          style={{width:'100%'}}
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
          style={{width:'100%'}}
        />
        <button type='submit' className='bg-[#78988f] text-white w-5/12 mr-auto ml-auto mt-6 p-3 font-bold tracking-[1px]' style={{borderRadius:'12px'}}>Registor</button>
        </div>
        <div className='w-full'>
        <TextField
        required
          id="outlined-Proferssion"
          label="Proferssion"
          style={{width:'100%'}}
        />
        <button type='button' className='bg-[#78988f] text-white w-5/12 mr-auto ml-auto mt-6 p-3 font-bold tracking-[1px]' style={{borderRadius:'12px'}}><span><a href="/">Back to Login</a></span></button>
        </div>
        </div>
        
      </div>
      
      
    </Box>
  );
}
export default RegistorForm;