import React from 'react'
import "./style.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import StudentImg from "../../images/Mask Group 67.png"
import StudentImg2 from "../../images/Mask Group 68.png"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ReplyIcon from '@mui/icons-material/Reply';
import LinkedInIcon from '@mui/icons-material/LinkedIn';




function Garllery() {
  return (
    <>

      <div className='gallery-div' >
        <div className='gallery-parent'>
                  <div className='child' >
                    <img  className='StudentImg' src={StudentImg} alt="StudentImg" height="500px"  width="470px" />
                  </div>


                  <div className='facebook-child'>
                    <div className='facebook-header' >
                      <span className='facebook-heading' ><span>Facebook Latest Post</span> <span><FacebookIcon /> </span> </span>
                      <div>
                        <span className='profile' >
                          <span>
                            <img src="data:image/jpeg;base64,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" alt="avatar" width="70px" height="70px" />
                          </span>
                          <h4>Tim Cook</h4>

                        </span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <div className='comment-section' >
                          <span className='icon' ><FavoriteBorderIcon /> 9k </span>
                          <span className='icon' ><ReplyIcon />Reply </span>
                        </div>
                        <hr />

                      </div>
                    </div>
                    <div className='facebook-header' >
                      <span className='facebook-heading' ><span>LinkedIn Latest Post</span> <span><LinkedInIcon /> </span> </span>
                      <div>
                        <span className='profile' >
                          <span>
                            <img src="data:image/jpeg;base64,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" alt="avatar" width="70px" height="70px" />
                          </span>
                          <h4>Tim Cook</h4>

                        </span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <div className='comment-section' >
                          <span className='icon' ><FavoriteBorderIcon /> 9k </span>
                          <span className='icon' ><ReplyIcon />Reply </span>
                        </div>
                        <hr />
                      </div>
                    </div>
                  </div>


                  <div className='child'>
                    <img src={StudentImg2} alt="StudentImg2"  height="500px" width="470px" />
                  </div>






        </div>

      </div>



    </>
  )
}

export default Garllery