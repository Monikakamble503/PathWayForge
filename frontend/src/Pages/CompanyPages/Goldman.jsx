import React from 'react';
import goldman from "../../Components/Assets/goldmanComp.jpg";
import goldmanimg from "../../Components/Assets/Goldman.jpg";

const Goldman = () => {
  return (
    <div className='goldmann'>
        <div className="goldman-intro" style={{ display: 'flex', alignItems: 'center', margin:"10px", textDecoration:"none" }}>
           <img src={goldman} alt="" style={{ height: '400px', marginRight: '10px' }} />
           <p style={{ fontSize: '30px', marginLeft:'10px' }}>
           It is amultinational investment bank and financial services company. It is considered a systemically important financial institution by the Financial Stability Board. t is a market maker for many types of financial products and provides clearing and custodian bank services. It operates private equity and hedge funds. It structures complex and tailor-made financial products.  <br />
               <br />Company type: <b>Software</b>
           </p>
        </div>
        <div className='Stats' >
          <h2>Stats of Students placed in last 5 years</h2>
          <img src={goldmanimg} alt="" style={{ height: '400px',display: 'flex', alignItems: 'center' }} />
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

export default Goldman;