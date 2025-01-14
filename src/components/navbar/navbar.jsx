import React from 'react';
import './navbar.css'
import { RiUserHeartLine } from "react-icons/ri";
import { IoBagOutline } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { india } from '../../assets';


const Navbar = () => {
  return <>
    <div className="nav-sale">
      ennjoy 50% off on all products
    </div>
    <nav>
      <div className="child-1">
        <ol>
          <li><a href="">Male</a></li>
          <li><a href="">Female</a></li>
          <li><a href="">Kids</a></li>
          <li><a href="">Our Mission</a></li>
          <li><a href="">Sale</a></li>
        </ol>
      </div>
      <div className="child-2">
        BeeUnick
      </div>
      <div className="child-3">
        <div className="search">
          <IoSearchOutline /> search
        </div>


        <div className="india">
          <img src={india} alt="" />
        </div>

        <RiUserHeartLine className="user" />


        <IoBagOutline className="bag" />


      </div>
    </nav>
  </>
}

export default Navbar