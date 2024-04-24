import React, { useState, useRef } from 'react'; 
import './Navbar.css'
import dropdown from '../Assets/dropdown.png'
import logo from '../Assets/logo.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menu, setMenu]= useState("home"); 
  const menuRef= useRef();

const dropdown_toggle=(e)=>{
  menuRef.current.classList.toggle('nav-menu-visible');
  e.target.classList.toggle('open')
}  

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="Logo of the website" />
        <p>PathwayForge</p>
      </div>
      <img className='nav-dropdown' onClick={dropdown_toggle} src={dropdown} alt="" />
      <ul ref={menuRef} className='nav-menu'>
        <li onClick={()=>{setMenu("home")}}><Link style={{textDecoration:'none'}} to='/'>Home</Link></li>
        <li onClick={()=>{setMenu("about")}}><Link style={{textDecoration:'none'}} to='/about'>About us</Link></li>
        <li onClick={()=>{setMenu("contact")}}><Link style={{textDecoration:'none'}} to='/contact'>Contact us</Link></li>
      </ul>
    </div>
  )
}

export default Navbar
