import React from 'react';
import adobe from "../../Components/Assets/Adobe.png";
import adobeimg from "../../Components/Assets/AdobeComp.jpg";
const Adobe = () => {
  return (
    <div className='adobe' style={{ display: 'flex', flexDirection: "column", alignItems: 'center', margin: "10px", textDecoration: "none" }}>
      <div className="adobe-intro" style={{ display: 'flex', alignItems: 'center' }}>
        <img src={adobeimg} alt="AdobeComp" style={{ height: '400px', marginRight: '10px' }} />
        <p style={{ fontSize: '30px', marginLeft: '10px' }}>
          Adobe Inc. is a multinational computer software company. It has historically specialized in software for the creation and publication of a wide range of content, including graphics, photography, illustration, animation, multimedia/video, motion pictures, and print.<br />
          <br />Company type: <b>Software</b>
        </p>
      </div>
      <div className='Stats'>
        <h2>Stats of Students placed in last 5 years</h2>
        <img src={adobe} alt="AdobeStats" style={{ height: '400px', display: 'flex', alignItems: 'center' }} />
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

export default Adobe;
