import React, { useState } from 'react'; // Import useState from React
import './item.css';
import { Link } from 'react-router-dom';

const Item = (props) => {
  const [menu, setMenu] = useState("home"); // Initialize state variable

  const handleClick = () => {
    setMenu(props.nm1); // Update the state with the value of props.nm1
  };

  return (
    <div className='item'>
      <img src={props.image} alt="" id="images" />
      <p><b>{props.title}</b></p>
      <p>{props.name}</p>

      <Link to={`/${props.nm1}`} style={{ textDecoration: 'none' }}><button onClick={handleClick}>Start now</button></Link>

    </div>
  );
}

export default Item;
