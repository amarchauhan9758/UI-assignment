import React from 'react'
import  universityImg from "../../images/Group 47108@2x.png"

function About() {
  return (
    <>
      <div className='about-section' >

      <div className='about-section-parent' >
        <div className='about-section-item' >
        <img src={universityImg} alt="universityImg"  height="400px" width="320px"  />

        </div>
        <div className='about-right-section'  >
          <h1>About us</h1>
          <p>The Indian Institute of Management Kashipur is a second-generation IIM set up by the Government of India in 2011. It aspires to achieve excellence in management education by using innovative teaching methods, promoting high quality research and practicing sustainable leadership. </p>
          <p>The institute strives to create and disseminate knowledge through applied and interdisciplinary research and practices in emerging areas of management. The institute develops socially conscious, competent, and ethical business leaders and researchers capable of critical thinking, innovation, and entrepreneurship while being inclusive and focusing on both regional development and internationalisation.</p>
          <buton className="btn" >Read more</buton>
        </div>
        </div>

        <div className='count-number' >

        <div>
          <span className='parent-span' ><h1>83% </h1>  OF RECENT GRADUATES STARTED NEW JOB</span>
        </div>
          <span className='parent-span' ><h1>134% </h1>  DEGREE PROGRAMS</span>
          <span className='parent-span' ><h1>12+ </h1> Years of history</span>
        </div>

      </div>
    </>
  )
}

export default About