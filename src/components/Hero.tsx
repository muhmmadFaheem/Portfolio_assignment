import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <div id="hero" className='min-h-screen bg-no-repeat bg-[url(/my_pic.png)] bg-cover'
    style={{backgroundSize: "23%", backgroundPosition: "left 90px top 170px"}}
    >
      
      <Navbar/>
      <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)]'>
      <div className='hidden lg:block'> </div>
      <div className='text-[40px] sm:text-[60px] font-bold leading-tight flex justify-center items-center'>
        <div>
          <p data-aos="zoom-out">I'm Muhammad</p>
          
          <p data-aos="zoom-out">  Faheem</p>
          
        </div>

      </div>
    </div>
    </div>
   
  )
}

export default Hero
