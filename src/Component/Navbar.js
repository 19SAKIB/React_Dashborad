import React from 'react';
import { FiBell, } from 'react-icons/fi';   
import Image from '../image/young-man.jpg';
import { FaBars } from "react-icons/fa6";
import '../App.css';

const  Navbar  = () =>  {
  return (
    <div className="navbar">
      <h3> <FaBars />  AlgoZenith</h3>
      <div className="navbar-items">
        <FiBell className="icon" />
        <img src={Image} alt='profileImage' className='profileImage' />
      </div>
    </div>
  );
}

export default Navbar;