import React from 'react';
import imageData from "../imgData";

function Certified() {
  return (
    <div className='container'>
       <div className='row'>
            <div className='col-md-4'>
                 <div className='d-flex certi-style align-items-center' style={{background: "#fff"}}>
                            <img src={imageData.c1.src} alt=''/>
                            <h2>100% Guaranteed Results Or We Work For Free!</h2>
                 </div>
            </div>
            <div className='col-md-4'>
                 <div className='d-flex certi-style align-items-center' style={{background: "#fff"}}>
                            <img src={imageData.c2.src} alt=''/>
                            <h2>100% Guaranteed Results Or We Work For Free!</h2>
                 </div>
            </div>
            <div className='col-md-4'>
                 <div className='d-flex certi-style align-items-center' style={{background: "#fff"}}>
                            <img src={imageData.c3.src} alt=''/>
                            <h2>100% Guaranteed Results Or We Work For Free!</h2>
                 </div>
            </div>
       </div>
    </div>
  )
}

export default Certified
