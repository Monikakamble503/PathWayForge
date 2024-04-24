import React from 'react';
import trilogy from "../../Components/Assets/TrilogyComp.png";
import trilogyimg from "../../Components/Assets/Trilogy.png";

const Trilogy = () => {
  return (
    <div className='trilogyy' style={{ display: 'flex', flexDirection: "column", alignItems: 'center', margin: "10px", textDecoration: "none" }}>
      <div className="trilogy-intro" style={{ display: 'flex', alignItems: 'center' }}>
        <img src={trilogy} alt="" style={{ height: '400px', marginRight: '10px' }} />
        <p style={{ fontSize: '30px', marginLeft: '10px' }}>
          It is a software company.  It specializes in software products for Global 1000 companies, especially in the automotive, consumer electronics, and insurance agencies.  <br />
          <br />Company type: <b>Software</b>
        </p>
      </div>
      <div className='Stats' >
        <h2>Stats of Students placed in last 5 years</h2>
        <img src={trilogyimg} alt="" style={{ height: '400px', display: 'flex', alignItems: 'center' }} />
      </div>
      <div>
        <p style={{ fontSize: '40px', marginLeft: '10px', textAlign: 'center' }}>
          Selection criteria: <b>7 / 7.5 GPA</b><br />
          No of students Placed total : <b>24</b><br />
          Packages: <b>9.69- 13.40 LPA</b><br />
        </p>
      </div>
    </div>
  );
};

export default Trilogy;