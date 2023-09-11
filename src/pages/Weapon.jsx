
import React from 'react'
import Navber from '../component/Navber'
import './Weapon.css'

function Weapon() {
  const rectangles = Array(10).fill().map((_, index) => (
    <div key={index} className="rectangle">
    <img src='/public/img/wea1.png' style={{width:'900px',height:'100px',objectFit:"contain", padding:'10px'}}/>
    <div className='weaponName'><span>Odin</span></div>
    </div>
    
  ));

  return (
    <div>
    <Navber/>
    <div className="container">
      <div className="frame">
        <p>Weapons</p>
      </div>
    </div>
    <div className="weapon-container">
    {rectangles}
    </div>
  
    </div>
  );
}

export default Weapon
