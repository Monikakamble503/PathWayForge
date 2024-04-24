import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import adminlogo from '../../assets/adminlogo.png'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="nav-logo">
                <img src={logo} alt="Logo of the website" />
                <p>PathwayForge </p>
            </div>
            <div className="adminlogo">
                <img src={adminlogo} alt="" />
                <p>Admin Panel</p>
            </div>
        </div>
    )
}

export default Navbar
