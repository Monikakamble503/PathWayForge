import React from 'react';
import veritas from "../../Components/Assets/VeritasComp.jpg";
import veritasimg from "../../Components/Assets/Veritas.png";

const Veritas = () => {
  return (
    <div className='veritass' style={{ display: 'flex', flexDirection:"column", alignItems: 'center', margin:"10px", textDecoration:"none" }}>
        <div className="veritas-intro" style={{ display: 'flex', alignItems: 'center' }}>
           <img src={veritas} alt="" style={{ height: '400px', marginRight: '10px' }} />
           <p style={{ fontSize: '30px', marginLeft:'10px' }}>
           It is an international data management company. It specializes in storage management software including the first commercial journaling file system, VxFS, VxVM, VCS, the personal/small office backup software Backup Exec, and the enterprise backup software, NetBackup.  <br />
               <br />Company type: <b>Software</b>
           </p>
        </div>
        <div className='Stats' >
          <h2>Stats of Students placed in last 5 years</h2>
          <img src={veritasimg} alt="" style={{ height: '400px',display: 'flex', alignItems: 'center' }} />
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

export default Veritas;