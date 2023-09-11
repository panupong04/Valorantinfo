
import React from 'react'
import Navber from '../component/Navber'
import './Map.css'

function Map() {
  const rectangles = Array(7).fill().map((_, index) => (
    <div key={index} className="rectangle-m">
    <img src='/public/img/Map1.png' style={{width:'300px',height:'160px', borderRadius: '10px' }}/>
    <span>ASCENT</span>
    </div>
    
  ))
  return (
    <div>
      <Navber/>
      <div className="map-container">
    {rectangles}
    
    </div>
    </div>
  )
}

export default Map
