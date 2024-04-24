import React from 'react';
import phonepe from "../../Components/Assets/PhonePeComp.png";
import phonepeimg from "../../Components/Assets/PhonePe.png";

const Phonepe = () => {
  return (
    <div className='phonepee'>
        <div className="phonepe-intro" style={{ display: 'flex', alignItems: 'center', margin:"10px", textDecoration:"none" }}>
           <img src={phonepe} alt="" style={{ height: '400px', marginRight: '10px' }} />
           <p style={{ fontSize: '30px', marginLeft:'10px' }}>
           multinational technology company, engaged in e-commerce, cloud computing, online advertising, digital streaming, and artificial intelligence. Amazon also distributes a variety of downloadable and streaming content through its Amazon Prime Video, MGM+, Amazon Music, Twitch, Audible, and Wondery units.  <br />
               <br />Company type: <b>Software</b>
           </p>
        </div>
        <div className='Stats' >
          <h2>Stats of Students placed in last 5 years</h2>
          <img src={phonepeimg} alt="" style={{ height: '400px',display: 'flex', alignItems: 'center' }} />
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

export default Phonepe;