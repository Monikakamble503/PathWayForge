import React from 'react'
// import './Array.css'
import ArrayImg from "../../Components/Assets/ArrayImg.png"

const Array = () => {
  return (
    <div className='array'>
      <h1 style={{textAlign:'center'}}>Array Data Structure</h1>
      <div className="upper" style={{ display:'flex', flexDirection:'column', textAlign:'left' }}>
        <img src={ArrayImg} alt="" style={{ height: '400px', marginRight: '10px', alignSelf:'center' }} />
        <p style={{margin:'0px', paddingLeft:'5px', fontSize:'20px'}}>An array is a collection of items of same data type stored at contiguous memory locations.</p>
        <p style={{margin:'0px', paddingLeft:'5px', fontSize:'20px'}}>An array is a collection of items of the same variable type that are stored at contiguous memory locations. It’s one of the most popular and simple data structures and is often used to implement other data structures. Each item in an array is indexed starting with 0.</p>
        <ul style={{margin:'0px', marginLeft:'1px', fontSize:'20px'}}>
            <h4>Basic terminologies of array</h4>
            <li>Array Index: In an array, elements are identified by their indexes. Array index starts from 0.</li>
            <li>Array element: Elements are items stored in an array and can be accessed by their index</li>
            <li>Array Length: The length of an array is determined by the number of elements it can contain</li>
        </ul>
        <button style={{alignSelf:'center', marginRight:'90px'}}><a href="https://youtube.com/playlist?list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&si=RXYA-MtTU5xOwlQ9
" style={{ textDecoration:'none' ,margin:'0px', fontSize:'20px', color:'#707070'}}>Link</a></button>
      </div>
    </div>
  )
}

export default Array
