import React, { useState } from 'react'
import './Video.css'
const Video = ({tick,title,views,children,onPlay,onPause}) => {
const[play,setPlay]=useState(false)
    function handleClick(){
    if(play) onPlay()
    else {onPause()
    setPlay(true)}
}
  return (
    <div className='video'>
        
      <img src="https://images.unsplash.com/photo-1430990480609-2bf7c02a6b1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" className='image'/>
      <h3 className='mb-20'>{title}</h3>
      <p>Coder Dost <span>{tick && <span>HII</span>}</span></p>
      <p>{views} views   .    1year ago</p>
      <button onClick={handleClick} className='video-btn'>{children}:{play? ">" :"||"}</button>
    </div>
  )
}

export default Video;
