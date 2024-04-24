
import React, { useState } from 'react';
import './Contactform.css';

const Contactform = () => {
  const [state, setState] = useState("contact")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    query: ""
  })

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const Contact = async () => {
    console.log("Contact established!", formData)
    let responseData;
    await fetch('http://localhost:4000/contact', {
      method: 'POST',
      headers: {
        Accept: 'application/form-data',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData),
    }).then((response) => response.json()).then((data) => responseData = data)

    if (responseData.success) {
      localStorage.setItem('auth-token', responseData.token)
    }
  }

  return (
    <div className='contactform-body'>
      <div className="contactform">
        <h1>Ask Your Queries Here!</h1>
        <div>
          <form action="">
            <input name='name' value={formData.name} onChange={changeHandler} type="text" placeholder='Enter Your Name' />
            <input name='email' value={formData.email} onChange={changeHandler} type="email" placeholder='Enter Email' />
            <input name='phone' value={formData.phone} onChange={changeHandler} type="tel" placeholder='Enter Contact Number' />
            <input name='query' value={formData.query} onChange={changeHandler} type="text" placeholder='Enter Your Query' />
            <br />
            <button onClick={Contact}>Submit</button>
          </form>
        </div>
      </div>

    </div>
  );
}

export default Contactform;

