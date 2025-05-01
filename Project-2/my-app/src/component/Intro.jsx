import React from 'react'
import BG from '../assets/BG4.jpg'

const Intro = () => {
  return (
    <div className='flex justify-evenly items-center w-full h-screen '>

<div className="bg-[url(assets/BG4.jpg)] mt-[80px] h-[700px] rounded-4xl bg-cover  w-[1450px] ">

<div className="grid">
    <div className="flex justify-items-start items-center">
        <div className="text-white w-[100px] flex justify-center items-center h-[40px] text-l  mx-8 my-15 border-white border-1 rounded-4xl">lorem</div>

        <div className="grid">
            <div className="text-7xl text-white mt-[100px] ml-[70px]">Explore The<br></br> World With Us </div>
            <div className=""></div>
        </div>
    </div>
    <div className="w-30 h-30  backdrop-blur-lg border-2 border-white blur-sm rounded-full"></div>
    <div className="w-30 h-30  rounded-full transform translate-y-[-45px] border-2 border-white"></div>

</div>


</div>
      {/* <img src={BG} className='  w-[1450px]  mt-[140px] h-[800px] rounded-4xl' ></img> */}

    </div>
  )
}

export default Intro
