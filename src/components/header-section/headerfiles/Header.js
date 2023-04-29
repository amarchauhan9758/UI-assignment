import React from 'react'
 import logo2 from  "../../../images/Image 33.png"
import logo1 from  "../../../images/logo.png"

function Header() {
  return (
    <>
    <div className="parent-div">
    <div>
      <img src={logo1} alt="logo" />
    </div>
    <div>
      <img src={logo2} alt="logo"  />
    </div>
  </div>
  </>
  )
}

export default Header