
import React from 'react'
import Navber from '../component/Navber'
import './Agent.css'

function Agent() {
  const rectangles = Array(4).fill().map((_, index) => (
    <div key={index} className="rectangles">

    <img src='/public/img/Map1.png' style={{width:'250px',height:'160px', padding:'5px', borderRadius: '10px'}}/>
    <span>ASCENT</span>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque auctor bibendum lacus at bibendum.  </p>
    </div>
    
    
  ));
  return (
    <div>
     <Navber/>
     
     <img src="https://scontent.fbkk12-2.fna.fbcdn.net/v/t1.6435-9/204842732_650845839650560_4567256131980609152_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeHXSbi-KzQM1A-F9Hv4UcTismDqOkHc55ayYOo6QdznlsIle25seKBmYyOfMMHOl8-OQBrokHWGIbFmyF_R1RwA&_nc_ohc=1zww7xEoD3oAX_57UTh&_nc_ht=scontent.fbkk12-2.fna&oh=00_AfBkOx_bk38apUrUFTv0aNL_1V1Gu26Hung0Ut6IkoG5QA&oe=652618FE" style={{width:'1200px',height:'200px', objectFit:"cover", paddingBottom: 20}}/>
     <div className="container">
      <div className="frame">
        <p>Agents</p>
      </div>
    </div>
     <div className="Agent-container">
     {rectangles}
     
     </div>
    </div>
  )
}

export default Agent
