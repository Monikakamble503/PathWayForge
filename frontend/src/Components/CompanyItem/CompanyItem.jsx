import React, { useState } from 'react';
import './CompanyItem.css'
import { Link } from 'react-router-dom';

const CompanyItem = (props) => {
    const [menu, setMenu] = useState("home");

    const handleClick = () => {
        setMenu(props.nm1); 
    };

  return (
    <div className='companyitem'>
      <button onClick={handleClick}>
        <Link to={`/${props.nm1}`} style={{ textDecoration: 'none' }}>{props.title}</Link>
      </button>
    </div>
  )
}

export default CompanyItem
