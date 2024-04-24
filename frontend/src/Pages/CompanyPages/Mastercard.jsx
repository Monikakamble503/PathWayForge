import React from 'react';
import mastercard from "../../Components/Assets/Mastercard.jpg";
import mastercardimg from "../../Components/Assets/MastercardStats.png";

const Mastercard = () => {
  return (
    <div className='mastercard'>
        <div className="mastercard-intro" style={{ display: 'flex', alignItems: 'center', margin:"10px", textDecoration:"none" }}>
           <img src={mastercard} alt="" style={{ height: '400px', marginRight: '10px' }} />
           <p style={{ fontSize: '30px', marginLeft:'10px' }}>
               Mastercard Inc. is the second-largest payment-technology corporation worldwide. It offers a range of payment transaction processing and other related-payment services (such as travel-related payments and bookings). Its headquarters are in Purchase, New York. <br />
               <br />Company type: <b>Public</b>
           </p>
        </div>
        <div className='Stats' >
          <h2>Stats of Students placed in last 5 years</h2>
          <img src={mastercardimg} alt="" style={{ height: '400px',display: 'flex', alignItems: 'center' }} />
        </div>
        <div>
            <p style={{ fontSize: '40px', marginLeft:'10px', textAlign: 'center' }}>
                Selection criteria: <b>7 / 7.5 GPA</b><br />
                No of students Placed total : <b>24</b><br />
                Packages: <b>9.69- 13.40 LPA</b><br />
            </p>
        </div>
    </div>
  );
};

export default Mastercard;

