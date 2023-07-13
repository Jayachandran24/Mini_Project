import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import leftImage from '../Assets/img/LoginLeft.jpg';
import rightImage from '../Assets/img/LoginRight.jpg';
import OutlinedInput from '@mui/material/OutlinedInput';
// import Button from '../Components/Button/Button';

const LoginPageComponent = () => {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
    };

  return (
    <Box display={'flex'}>
    <div className=' w-full ' style={{background:leftImage}}>
        <div className='w-8/12 mt-[440px] flex flex-col m-auto'>
      <FormControl variant="outlined" sx={{marginBottom:'20px'}}>
        <InputLabel htmlFor="input-with-icon-adornment">
          Email
        </InputLabel>
        <OutlinedInput
          id="input-with-icon-adornment"
          endAdornment={
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          }
          label="Email"
          autoComplete='off'
        />
        
      </FormControl>

      <FormControl sx={{}} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
            autoComplete='off'
          />
        </FormControl>
        {/* <Button type={'submit'} className='bg-[#78988f] text-white w-9/12 mr-auto ml-auto mt-6 p-3 font-bold tracking-[1px]'style={{borderRadius:'12px'}} buttonName={'logIn'}></Button> */}
        <button type='submit' className='bg-[#78988f] text-white w-9/12 mr-auto ml-auto mt-6 p-3 font-bold tracking-[1px]' style={{borderRadius:'12px'}}>LogIn</button>
        <p className='mt-3'>For Registor <span className='ml-1'><a href="RegistorForm" className='text-blue-700 underline'>Click here</a></span></p>
        </div>
    </div>
        <div className='w-full' >
            <img src={rightImage} alt="login" style={{height:'100vh',width:'100%'}}/>
        </div>
    </Box>
  );
}
export default LoginPageComponent;