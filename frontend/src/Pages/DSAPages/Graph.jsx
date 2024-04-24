import React from 'react'
// import './Array.css'
import graphimage from "../../Components/Assets/graphimage.jpg"

const Graph = () => {
  return (
    <div className='Graph'>
      <h1 style={{ textAlign: 'center' }}>Graph Data Structure</h1>
      <div className="upper" style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
        <img src={graphimage} alt="" style={{ height: '400px', marginRight: '10px', alignSelf: 'center' }} />
        <p style={{ margin: '0px', paddingLeft: '5px', fontSize: '20px' }}>Graph Data Structure is a collection of nodes connected by edges.</p>
        <p style={{ margin: '0px', paddingLeft: '5px', fontSize: '20px' }}>It’s used to represent relationships between different entities.</p>
        <p style={{ margin: '0px', paddingLeft: '5px', fontSize: '20px' }}>Graph algorithms are methods used to manipulate and analyze graphs, solving various problems like finding the shortest path or detecting cycles. </p>
        <ul style={{ margin: '0px', marginLeft: '1px', fontSize: '20px' }}>
          <h4>Applications of Graph Data Structures:</h4>
          <li>Graph data structures can be used to represent the interactions between players on a team, such as passes, shots, and tackles. </li>
          <li>Commonly used to represent social networks, such as networks of friends on social media.</li>
          <li>Graphs are used to represent the connections between different places in a transportation network, such as roads and airports.</li>
        </ul>
        <button style={{ alignSelf: 'center', marginRight: '90px' }}><a href="https://youtube.com/playlist?list=PL-Jc9J83PIiHfqDcLZMcO9SsUDY4S3a-v&si=cCzZAxtlmj-bMuK1"
          style={{ textDecoration: 'none', margin: '0px', fontSize: '20px', color: '#707070' }}>Link</a></button>
      </div>
    </div>
  )
}

export default Graph