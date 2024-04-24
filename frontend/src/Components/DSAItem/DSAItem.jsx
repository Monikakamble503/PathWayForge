import React, { useState } from 'react';
import './DSAItem.css'
import { Link } from 'react-router-dom';

const DSAItem = (props) => {
  const [menu, setMenu] = useState("home");
  const [id, setid] = useState(0);

  const handleClick = () => {
    setMenu(props.nm1);
    setid(props.id);
  };

  return (
    <div className='dsaitem'>
      <div className="body">
        <Link to={`/${props.nm1}`} style={{ textDecoration: 'none' }}><button onClick={handleClick}>{props.title}</button></Link>
      </div>

    </div>
  );
}

export default DSAItem
