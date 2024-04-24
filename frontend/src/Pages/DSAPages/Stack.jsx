import React from 'react'
// import './Array.css'
import stackimage from "../../Components/Assets/stackimage.png"

const Stack = () => {
  return (
    <div className='Stack'>
      <h1 style={{textAlign:'center'}}>Stack Data Structure</h1>
      <div className="upper" style={{ display:'flex', flexDirection:'column', textAlign:'left' }}>
        <img src={stackimage} alt="" style={{ height: '400px', marginRight: '10px', alignSelf:'center' }} />
        <p style={{margin:'0px', paddingLeft:'5px', fontSize:'20px'}}>A stack is a linear data structure that follows the Last-In-First-Out (LIFO) principle.</p>
        <p style={{margin:'0px', paddingLeft:'5px', fontSize:'20px'}}> It behaves like a stack of plates, where the last plate added is the first one to be removed.</p>
        <ul style={{margin:'0px', marginLeft:'1px', fontSize:'20px'}}>
            <h4>Applications of Stack Data Structures:</h4>
            <li> 1.Recursion
                 2.Expression Evaluation and Parsing
                 3.Depth-First Search (DFS)
                 4.Undo/Redo Operations
                 5.Browser History</li>
        </ul>
        <button style={{alignSelf:'center', marginRight:'90px'}}><a href="https://youtube.com/playlist?list=PL-Jc9J83PIiEyUGT3S8zPdTMYojwZPLUM&si=LYTdEFxJoh82LVzJ"
         style={{ textDecoration:'none' ,margin:'0px', fontSize:'20px', color:'#707070'}}>Link</a></button>
      </div>
    </div>
  )
}

export default Stack