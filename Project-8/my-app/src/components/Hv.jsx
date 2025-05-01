import React from 'react'
import poki from '../assets/poki.mp4'
const Hv = () => {
  return (
    <div className='flex justify-center items-center'>
      <video className=' ' src={poki} autoPlay loop muted></video>
      <div className=" grid center">
        <h1>WOMEN</h1>
        <div className="">MOTHER'S DAY</div>
        <div className="">Discover The Selection</div> 
      </div>
    </div>
  )
}

export default Hv
