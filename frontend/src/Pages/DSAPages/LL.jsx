import React from 'react'
import Linkedlistimage from "../../Components/Assets/LinkedListimage.png"

const LL = () => {
    return (
        <div className='Linkedlist'>
            <h1 style={{ textAlign: 'center' }}>Linkedlist Data Structure</h1>
            <div className="upper" style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                <img src={Linkedlistimage} alt="" style={{ height: '400px', marginRight: '10px', alignSelf: 'center' }} />
                <p style={{ margin: '0px', paddingLeft: '5px', fontSize: '20px' }}>A linked list is a fundamental data structure in computer science. </p>
                <p style={{ margin: '0px', paddingLeft: '5px', fontSize: '20px' }}>It consists of nodes where each node contains data and a reference (link) to the next node in the sequence.</p>
                <ul style={{ margin: '0px', marginLeft: '1px', fontSize: '20px' }}>
                    <li><h4>Linkedlist:</h4></li>
                    <li><b>Data Structure:</b> Non-contiguous</li>
                    <li><b>Memory Allocation:</b> Dynamic</li>
                    <li><b>Insertion/Deletion:</b> Efficient</li>
                    <li><b>Access:</b> Sequential</li>
                    <li><h4>Types of Linkedlist:</h4></li>
                    <li>1.Singly Linked List</li>
                    <li>2.Doubly Linked List</li>
                    <li>3.Circular Linked List</li>
                    <li>4.Circular Doubly Linked List</li>
                    <li>5.Header Linked List</li>
                </ul>

                <button style={{ alignSelf: 'center', marginRight: '90px' }}>
                    <a href="https://youtube.com/playlist?list=PL-Jc9J83PIiF5VZmktfqW6WVU1pxBF6l_&si=46gC_JRNkjrjkDy7"
                        style={{ textDecoration: 'none', margin: '0px', fontSize: '20px', color: '#707070' }}>Link</a>
                </button>
            </div>
        </div>
    )
}

export default LL
