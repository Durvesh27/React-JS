import React from 'react'
import Video from './Video'

const Data = () => {
  return (
    <div className='flex p-10'>
    <Video title={"Node JS Tutorial"} views={"100K"} tick={true} onPlay={()=>alert("Played")} onPause={()=>alert("Paused")} >
  Play
    </Video>
    <Video title={"React JS Tutorial"} views={"200K"} tick={false} onPlay={()=>alert("Played")} onPause={()=>alert("Paused")}>
    Play
    </Video>
    </div>
  )
}

export default Data
