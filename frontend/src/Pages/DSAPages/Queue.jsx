import React from 'react'
// import './Array.css'
import queueimage from "../../Components/Assets/queueimage.png"

const Queue = () => {
  return (
    <div className='Queue'>
      <h1 style={{textAlign:'center'}}>Queue Data Structure</h1>
      <div className="upper" style={{ display:'flex', flexDirection:'column', textAlign:'left' }}>
        <img src={queueimage} alt="" style={{ height: '400px', marginRight: '10px', alignSelf:'center' }} />
        <p style={{margin:'0px', paddingLeft:'5px', fontSize:'20px'}}>A queue is a linear data structure that follows the First-In-First-Out (FIFO) principle. </p>
        <p style={{margin:'0px', paddingLeft:'5px', fontSize:'20px'}}> It operates like a line where elements are added at one end (rear) and removed from the other end (front).</p>
        <ul style={{margin:'0px', marginLeft:'1px', fontSize:'20px'}}>
            <h4>Applications of Queue Data Structures:</h4>
            <li>1.Task scheduling in operating systems
                2.Data transfer in network communication
                3.Simulation of real-world systems (e.g., waiting lines)
                4.Priority queues for event processing queues for event processing </li>
        </ul>
        <button style={{alignSelf:'center', marginRight:'90px'}}><a href="https://youtube.com/playlist?list=PLOEynxdP_HWSjwo-gyHp6nuUejUIRn_ef&si=5C9GKkFKpWlEOcYE"
         style={{ textDecoration:'none' ,margin:'0px', fontSize:'20px', color:'#707070'}}>Link</a></button>
      </div>
    </div>
  )
}

export default Queue