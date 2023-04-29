import React from 'react'
import InstituePic from "../../images/Mask Group 53.png"
import InstituePic2 from "../../images/Mask Group 54.png"
import Svg from "../../images/Group 47135.svg"


// import Grid from '@mui/material/Grid';




function Banner() {



  return (
    <>

      <div className='banner' >

        <div className='banner-item'>
          <div className='first-child' >
            <h2>Welcome to </h2>
            <h1>THE INDIAN INSTITUTE OF MANAGEMENT KASHIPUR</h1>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing eserewddiam nonumy eirmod tempor invidunt ut labore.
            </p>
            <button className='btn' >Read More</button>
          </div>
          <div className='second-child' >
            <img src={InstituePic} alt="InstituePic"  height="500px" width="500px" />
          </div>
          <div className='third-child' >
            <img src={InstituePic2} alt="InstituePic2" height="500px" width="500px"  />
          </div>

        </div>
       <div>
       <img className='svg' src={Svg} alt='svg' />
       </div>

      </div>



    </>
  )
}

export default Banner