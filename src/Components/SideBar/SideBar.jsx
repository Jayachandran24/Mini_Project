import React from 'react';
import '../SideBar/SideBar.css'
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const SideBar = () =>{
    return(
        <>
        
        <div className='sidebar '>
                <ul>
                    <li>
                        <Link to=''>
                        Home
                        </Link>
                    </li>
                    <li>
                        <Link to='/Contact'>
                        Contact
                        </Link>
                    </li>
                    <li>
                        <Link to='/AboutUs'>
                        About Us
                        </Link>
                    </li>
                </ul>
        </div>
        
        </>
    )
}

export default SideBar;