import React, { useState } from 'react';
import './Item1.css'
import { Link } from 'react-router-dom';

const Item1 = (props) => {
  const [menu, setMenu] = useState("home");

  const handleClick = () => {
    setMenu(props.nm1);
  };

  return (
    <div className='item1'>
      <img src={props.image} alt="" id="images" />
      <p>{props.name1}</p>
      <p>{props.name2}</p>

      <Link to={`/${props.nm1}`} style={{ textDecoration: 'none' }}><button onClick={handleClick}>{props.title}</button></Link>

    </div>
  )
}

export default Item1
