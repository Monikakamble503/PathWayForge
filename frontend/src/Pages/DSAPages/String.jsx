import React from 'react'
import Stringimage from '../../Components/Assets/Stringimage.png'

const String = () => {
    return (
        <div className='string'>
            <h1 style={{ textAlign: 'center' }}>String Data Structure</h1>
            <div className="upper" style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                <img src={Stringimage} alt="" style={{ height: '400px', marginRight: '10px', alignSelf: 'center' }} />
                <p style={{ margin: '0px', paddingLeft: '5px', fontSize: '20px' }}>String is considered a data type in general and is typically represented as arrays of bytes (or words) that store a sequence of characters. String is defined as an array of characters.</p>
                <p style={{ margin: '0px', paddingLeft: '5px', fontSize: '20px' }}>In most programming languages, strings are treated as a distinct data type. This means that strings have their own set of operations and properties. They can be declared and manipulated <br />using specific string-related functions and methods.</p>
                <ul style={{ margin: '0px', marginLeft: '1px', fontSize: '20px' }}>
                    <h4>Applications of String</h4>
                    <li>Text Processing: Strings are extensively used for text processing tasks such as searching, manipulating, and analyzing textual data.</li>
                    <li>Data Representation: Strings are fundamental for representing and manipulating data in formats like JSON, XML, and CSV.</li>
                    <li>Database Operations: Strings are essential for working with databases, including storing and querying text-based data.s</li>
                </ul>
                <button style={{ alignSelf: 'center', marginRight: '90px' }}><a href="https://youtube.com/playlist?list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&si=RXYA-MtTU5xOwlQ9
" style={{ textDecoration: 'none', margin: '0px', fontSize: '20px', color: '#707070' }}>Link</a></button>
            </div>
        </div>
    )
}

export default String
