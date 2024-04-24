import React from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom'
import addquestionicon from '../../assets/addquestionicon.png';
import listproducticon from '../../assets/listproducticon.png';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <Link to={'/addproduct'} style={{ textDecoration: "none" }}>
                <div className="sidebar-item">
                    <img src={addquestionicon} alt="" />
                    <p>Add Question</p>
                </div>
            </Link>
            <Link to={'/listproduct'} style={{ textDecoration: "none" }}>
                <div className="sidebar-item">
                    <img src={listproducticon} alt="" />
                    <p>Question List</p>
                </div>
            </Link>
            <Link to={'/listusers'} style={{ textDecoration: "none" }}>
                <div className="sidebar-item">
                    <img src={listproducticon} alt="" />
                    <p>User Query List</p>
                </div>
            </Link>
        </div>
    )
}

export default Sidebar
