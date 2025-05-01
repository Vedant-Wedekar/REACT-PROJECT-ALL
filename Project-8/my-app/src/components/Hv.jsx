import React from 'react'
import poki from '../assets/poki.mp4'
const Hv = () => {
  return (
    <div className='flex justify-between items-center'>
      <video className=' ' src={poki} autoPlay loop muted></video>
      <div className="grid place-items-center transform -translate-x- -translate-y-1/2 absolute top-5/8 left-6/8  ml-15 text-center gap-2">
        <h1 className='text-[12px]'>WOMEN</h1>
        <div className="text-[25px] font-medium ">Mother's Day</div>
        <div className="underline">Discover The Selection</div> 
      </div>
    </div>
  )
}

export default Hv
