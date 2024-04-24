import React from 'react';
import deutsch from "../../Components/Assets/deutschComp.jpg";
import deutschimg from "../../Components/Assets/Deutsch.png";

const Deutsch = () => {
  return (
    <div className='deutschh'>
        <div className="deutsch-intro" style={{ display: 'flex', alignItems: 'center', margin:"10px", textDecoration:"none" }}>
           <img src={deutsch} alt="" style={{ height: '400px', marginRight: '10px' }} />
           <p style={{ fontSize: '30px', marginLeft:'10px' }}>
            It is multinational investment bank and financial services company. <br />
               <br />Company type: <b>Software</b>
           </p>
        </div>
        <div className='Stats' >
          <h2>Stats of Students placed in last 5 years</h2>
          <img src={deutschimg} alt="" style={{ height: '400px',display: 'flex', alignItems: 'center' }} />
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

export default Deutsch;