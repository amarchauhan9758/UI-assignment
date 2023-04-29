import React from 'react'
import newsImg from "../../images/Mask Group 62.png"
import classImg from "../../images/Mask Group 63.png"
import eventImg from "../../images/Mask Group 64.png"
import PersonIcon from '@mui/icons-material/Person';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import "./style.css"

function Event() {
  return (
    <>
    <div className='parent' >
    <div className='events'>
        <div className='parent-event' >
        <div className='child' >
        <h1>News & Events</h1>
        <img src={newsImg} alt="newsImg"  />
        <div className='event-date'>
        <div className='event-icon'>
            <span><PersonIcon/></span>
            <span>by Suman Yadav</span>
        </div>
        <div className='event-icon' >
            <span><CalendarMonthIcon/></span>
            <span>12th Sep 2022</span>
        </div>
        </div>
        <p className="p-text" >Lorem ipsum dolor sit amet .</p>
        <span className='readmore-btn' >Read More <ArrowRightAltIcon/></span>
        </div>
        <div className='child' >
        <h1>Industry Connect</h1>
        <img src={classImg} alt="newsImg"  />
        <div className='event-date' >
        <div className='event-icon' >
            <span><PersonIcon/></span>
            <span>by Suman Yadav</span>
        </div>
        <div className='event-icon' >
            <span><CalendarMonthIcon/></span>
            <span>12th Sep 2022</span>
        </div>
        </div>
        <p className="p-text" >Lorem ipsum dolor sit amet.</p>
        <span className='readmore-btn' >Read More <ArrowRightAltIcon/></span>
        </div>
        <div className='child' >
        <h1>Notice Board</h1>
        <img src={eventImg} alt="newsImg"  />
        <div  className='event-date' >
        <div className='event-icon' >
            <span><PersonIcon/></span>
            <span>by Suman Yadav</span>
        </div>
        <div className='event-icon' >
            <span><CalendarMonthIcon/></span>
            <span>12th Sep 2022</span>
        </div>
        </div>
        <p className="p-text" >Lorem ipsum dolor sit amet.</p>
        <span className='readmore-btn' >Read More <ArrowRightAltIcon/></span>
        </div>


        </div>
    </div>
</div>
    </>
  )
}

export default Event