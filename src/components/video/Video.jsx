import React from 'react'
import "./_video.scss"
import { AiFillEye } from 'react-icons/ai'

function Video() {
  return (
    <div className="video">
      <div className="video__top">
        <img src="https://i.ytimg.com/vi/EzFXDvC-EwM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCoZG-Vso88jmmtlUgDNzcYVQvjiA" alt="" />
        <span
          className='video__top__duration'
        >04:23</span>
      </div>
      <div className="video__title">
        The Boys Season 4 | Netflix | the tite of this video
      </div>
      <div className="video__details">
        <span>
          <AiFillEye /> 5m Views •
        </span>
        <span>5 days ago</span>
      </div>
      <div className="video__channel">
        <img src="https://yt3.ggpht.com/ady-sFHVvjfJS0i8v2pF-LOwNmqv3e4hDSiIcOyI1jDCwl84isyNlQ8rl-yxm7_l1jSxPS_Epk0=s68-c-k-c0x00ffffff-no-rj" alt="" />
        <p>Prime Video</p>
      </div>
    </div>
  )
}

export default Video
