import * as React from 'react';
import rightImage from '../Assets/img/LoginRight.jpg';
import { Link, useNavigate } from 'react-router-dom';
import hospital from '../Assets/img/logo.png'
import { useState } from 'react';
import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const Form = () => {

const LoginPageComponent = () => {

  // const [showPassword, setShowPassword] = React.useState(false);

  // const handleClickShowPassword = () => setShowPassword((show) => !show);

  // const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
  //   event.preventDefault();
  // };
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost/miniproject/Backend/LoginPage/LoginPage.php', (formData))

      .then(response => {
        // console.log(response)
        console.log(response.data)
        console.log(response.data.message)
        const role = response.data.role;
        if (role === "Doctor") {
          navigate("/Doctor")
        } else if(role === "Patient"){
          navigate("/Patient")
        }else if(role === "Medical"){
          navigate("/Medical")
        }else{
          navigate("/LoginPageComponent")
        }
        // message.success(response.data.message)
      })
      .catch((error) => {
        console.error(error);
        // message.error(error?.data?.error?.message);
      })
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <>
      <div className='flex'>
        <div className='w-full h-screen'>
          <div className='heading w-full '>
            <h1 className='text-3xl text-center mt-[150px] font-bold tracking-[1px]' >GR Hospital</h1>
            <p className='health mt-10 text-xl tracking-[1px]'>“Medicines cure diseases, but only doctors can cure patients.”</p>
            <img className='w-[100px] ml-auto mr-auto mt-10' src={hospital} alt="Logo" />
          </div>
          <form className='w-full h-[45vh] flex justify-center items-end' >
            <div className=' w-full '>
              <div className='flex flex-col w-[55%] mr-auto ml-auto items-baseline py-3'>
                <label className='font-semibold mb-2' style={{ letterSpacing: '1px' }}>Email : </label>
                <input type="email" name='email' placeholder='Enter Your Email' className='w-full p-3' style={{ border: '1px solid gray', borderRadius: '12px' }} onChange={handleChange} value={formData.email} />
              </div>
              <div className='flex flex-col w-[55%] mr-auto ml-auto items-baseline py-3'>
                <label className='font-semibold mb-2' style={{ letterSpacing: '1px' }}>Password : </label>
                <input type="Password" name='password' placeholder='Enter Your Password' className='w-full p-3' style={{ border: '1px solid gray', borderRadius: '12px' }} onChange={handleChange} value={formData.password} />
              </div>
              <button type='submit' name='submit' className='bg-[#78988f] text-white w-6/12 mr-auto ml-auto mt-6 p-3 font-bold tracking-[1px]' style={{ borderRadius: '12px' }} onClick={handleSubmit}>LogIn</button>
              <p className='mt-3 font-semibold' style={{ letterSpacing: '1px' }}> For Registor
                <Link to='/RegistorForm' className='text-blue-700 underline ml-2'>Click here</Link>
              </p>
              <p className='mt-3 font-semibold' style={{ letterSpacing: '1px' }}> For More Login
                <Link to='/' className='text-blue-700 underline ml-2'>Click here</Link>
              </p>
            </div>
          </form>
        </div>
        <div className='w-full'>
          <img src={rightImage} alt="login" style={{ height: '100vh', width: '100%', }} />
        </div>
      </div>
    </>
  );
}
export default LoginPageComponent;