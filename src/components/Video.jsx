import React from 'react'
import './Video.css'
function Video({thumbnail,channel,title,views,time}) {
  return (
   <>
   <div className="container">
    <div className="pic">
        <img src={thumbnail} alt="" />
    </div>
    <div className="title">{title}</div>
    <div className="channel">{channel}</div>
    <div className="views">{views} views <span>.</span>{time}</div>
   </div>
   </>
  )
}

export default Video