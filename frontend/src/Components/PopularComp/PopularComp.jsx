import React from 'react'
import './PopularComp.css'
import CompanyInfo_product from '../Assets/CompanyInfo'
import CompanyItem from '../CompanyItem/CompanyItem'

const PopularComp = () => {
  return (
    <div className='popular2'>
      <div className="popular2-item">
        {CompanyInfo_product.map((item)=>{
           return <CompanyItem id={item.id} title={item.title}  nm1={item.nm1}/> 
        })}
      </div>
    </div>
  )
}

export default PopularComp
