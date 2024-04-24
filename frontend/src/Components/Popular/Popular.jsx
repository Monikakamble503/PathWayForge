import React from 'react'
import './Popular.css'
import data_product from '../Assets/data'
import Item from '../item/item'

const Popular = () => {
  return (
    <div className='popular'>
      <h1>ONE STEP AHEAD</h1>
      <hr />
      <div className="popular-item">
        {data_product.map((item) => {
          return <Item id={item.id} title={item.title} name={item.name} image={item.image} nm1={item.nm1} />
        })}
      </div>
    </div>
  )
}

export default Popular
