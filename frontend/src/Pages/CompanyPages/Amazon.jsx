import React from 'react';
import amazon from "../../Components/Assets/AmazonComp.jpeg";
import amazonimg from "../../Components/Assets/Amazon.png";

const Amazon = () => {
  return (
    <div className='amazonn'>
        <div className="amazonn-intro" style={{ display: 'flex', alignItems: 'center', margin:"10px", textDecoration:"none" }}>
           <img src={amazon} alt="" style={{ height: '400px', marginRight: '10px' }} />
           <p style={{ fontSize: '30px', marginLeft:'10px' }}>
           It is a multinational technology company, engaged in e-commerce, cloud computing, online advertising, digital streaming, and artificial intelligence. Amazon also distributes a variety of downloadable and streaming content through its Amazon Prime Video, MGM+, Amazon Music, Twitch, Audible, and Wondery[20] units<br />
               <br />Company type: <b>Software</b>
           </p>
        </div>
        <div className='Stats' >
          <h2>Stats of Students placed in last 5 years</h2>
          <img src={amazonimg} alt="" style={{ height: '400px',display: 'flex', alignItems: 'center' }} />
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

export default Amazon;