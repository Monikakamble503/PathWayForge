import React from 'react'
// import './Array.css'
import treeimage from "../../Components/Assets/treeimage.webp"

const Tree = () => {
  return (
    <div className='Tree'>
      <h1 style={{ textAlign: 'center' }}>Tree Data Structure</h1>
      <div className="upper" style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
        <img src={treeimage} alt="" style={{ height: '400px', marginRight: '10px', alignSelf: 'center' }} />
        <p style={{ margin: '0px', paddingLeft: '5px', fontSize: '20px' }}>A tree data structure is a hierarchical structure that is used to represent and organize data in a way that is easy to navigate and search. </p>
        <p style={{ margin: '0px', paddingLeft: '5px', fontSize: '20px' }}>It is a collection of nodes that are connected by edges and has a hierarchical relationship between the nodes</p>

        <ul style={{ margin: '0px', marginLeft: '1px', fontSize: '20px' }}>
          <h4>Applications of Tree Data Structures:</h4>
          <li>1.File System:  This allows for efficient navigation and organization of files.
            2.Data Compression: Huffman coding is a popular technique for data compression that involves constructing a binary tree where the leaves represent characters and their frequency of occurrence.
            The resulting tree is used to encode the data in a way that minimizes the amount of storage required.
            3.Compiler Design: In compiler design, a syntax tree is used to represent the structure of a program.
            4.Database Indexing: B-trees and other tree structures are used in database indexing to efficiently search for and retrieve data. </li>
        </ul>
        <button style={{ alignSelf: 'center', marginRight: '90px' }}><a href="https://youtube.com/playlist?list=PLkIpj7mL1E7sgSzwlAxM6TfS_WJ529O7y&si=_nKuaPzQ17i7KG60"
          style={{ textDecoration: 'none', margin: '0px', fontSize: '20px', color: '#707070' }}>Link</a></button>
      </div>
    </div>
  )
}

export default Tree