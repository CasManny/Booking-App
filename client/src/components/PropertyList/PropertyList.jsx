import React from 'react'
import './PropertyListstyles.css'
import { Properties  } from '../../rooms'

const PropertyList = () => {
  return (
      <div className="property__list">
          {Properties.map((item,index) => (
          <div className="property__list-item" key={index}>
              <img src={item.img} alt={item.title} className='property__list-item__img' />
              <div className="property__list-titles">
                  <h1>{item.title}</h1>
                  <h2>{item.subtitle}</h2>
              </div>
          </div>
            
            ))}
      </div>
  )
}

export default PropertyList