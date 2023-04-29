import React from 'react'
import Svg from "../../images/Group 47135.svg"
import DoctorProgramme from "../../images/Mask Group 70.png"
import MBA from "../../images/Mask Group 72.png"
import Analytics from "../../images/Mask Group 71.png"
import SchoolIcon from '@mui/icons-material/School';

function HeroSection() {
  return (
    <>

    <div className='hero-section' >
      <h1 className='heading-academics' >Academics</h1>
      <p className='' >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
    </div>

    <div className='hero-section-item' >
    <div>
      <img src={DoctorProgramme} alt="DoctorProgramme" height="250px" width="370px" />
      <div className='' >
      <h1>Doctoral Programme</h1>
      <div>
        <p>Sed ut perspiciatis unde omnisatus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventores et quasi</p>
      </div>

      <div>
       <h4 className='parent-span' ><SchoolIcon/> Phd </h4>
      </div>

      </div>
    </div>
    <div>
      <img src={MBA} alt="MBA"  height="250px" width="370px" />
      <div className='' >
      <h1  >MBA</h1>
      <div>
        <p>Sed ut perspiciatis unde omnisatus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventores et quasi</p>
      </div>

      <div>
       <h4 className='parent-span' ><SchoolIcon/>Post Graduation</h4>
      </div>

      </div>
    </div>
    <div>
      <img src={Analytics} alt="Analytics" height="250px" width="370px" />
      <div className='' >
      <h1>MBA (Analytics)</h1>
      <div>
        <p>Sed ut perspiciatis unde omnisatus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventores et quasi</p>
      </div>

      <div className=''>
       <h4 className='parent-span' ><SchoolIcon/>Analytics</h4>
      </div>

      </div>
    </div>


    </div>



    </>
  )
}

export default HeroSection