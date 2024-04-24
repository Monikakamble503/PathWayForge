
import React, { useState, useEffect } from 'react';
import './Listusers.css';


const Listusers = () => {
    const [allusers, setAllUsers] = useState([]);

    const fetchInfo = async () => {
        await fetch('http://localhost:4000/allusers')
            .then((res) => res.json())
            .then((data) => { setAllUsers(data); });
    };

    useEffect(() => {
        fetchInfo();
    }, []);

    return (
        <div className='listproduct'>
            <h1>All Users Query List</h1>
            <div className="listproduct-format-main">
                <p>Query</p>
                <p>Email</p>
                <p>Phone</p>
                <p>Name</p>
            </div>
            <div className="listproduct-allproducts" style={{ overflow: "auto" }}>
                <hr />
                {allusers.map((user, index) => (
                    <div key={index} className="listproduct-format-main listproduct-format">
                        <p>{user.query}</p>
                        <p>{user.email}</p>
                        <p>{user.phone}</p>
                        <p>{user.name}</p>
                    </div>
                ))}
                <hr />
            </div>
        </div>
    );
};

export default Listusers;
