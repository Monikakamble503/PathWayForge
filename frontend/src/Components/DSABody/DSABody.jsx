
import React, { useState } from 'react';
import './DSABody.css'
import { DSA_product } from '../Assets/DSA'
import ALGO_product from '../Assets/ALGO'
import DSAItem from '../DSAItem/DSAItem'


const DSABody = () => {

  const [id, setid] = useState(0);

  const UpdateId = () => {
    setid(id)
  }

  return (
    <div className='dsabody'>
      <div className="left1">
        <h1>DATA STRUCTURE</h1>
        <div className="popular-item1">
          {DSA_product.map((item1) => {
            return <DSAItem id={item1.id} title={item1.title} nm1={item1.nm1} />
            if (onclick) {
              <p>{id}</p>
            }
          })}
        </div>
      </div>
      <div className="right1">
        <h1>ALGORITHMS</h1>
        <div className="popular-item1">
          {ALGO_product.map((item2) => {
            return <DSAItem id={item2.id} title={item2.title} nm1={item2.nm1} />
          })}
        </div>
      </div>
    </div>
  )
}

export default DSABody