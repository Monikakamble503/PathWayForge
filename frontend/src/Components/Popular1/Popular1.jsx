import React from 'react'
import './Popular1.css'
import info_product from '../Assets/info'
import Item1 from '../Item1/Item1'

const Popular1 = () => {
  return (
    <div className='popular1'>
      <h1>ENHANCE YOUR LEARNING!</h1>
      <hr />
      <div className="popular-item">
        {info_product.map((item1)=>{
           return <Item1 id={item1.id} title={item1.title} name1={item1.name1} name2={item1.name2} image={item1.image} nm1={item1.nm1}/>
        })}
      </div>
    </div>
  )
}

export default Popular1
