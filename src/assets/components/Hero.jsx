import React from 'react'

const Hero = () => {
  return (
    <div className='container Hero'>
        <div className="left">
            <h1><span>Studying</span> Online is now much easier</h1>
            <p>Skilline is an interesting platform that will teach you in more an interactive way</p>
            <div className="hero-btn">
                <button className='hero-btn1'>Join for free</button>
                <button className='hero-btn2'><img src="./images/watch.svg" alt="" />Watch how it works</button>
            </div>
        </div>
        <div className="right">
            <img src="./images/right.svg" alt="" />
        </div>
    </div>
  )
}

export default Hero