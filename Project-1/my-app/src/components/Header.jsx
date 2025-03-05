import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const header = () => {
  return (
    <div className='w-full h-[10vh] flex justify-between items-center px-10'>

 
      <div className="logo text-3xl font-bold">Logo.</div>

      <div className="ml-[200px]"> 
        <div className="w-[45px] h-[20px] bg-red-600 ml-[150px] transform translate-y-[10px] rounded-4xl text-white text-sm flex justify-center ">New</div>
      <div className="w-[200px] h-[35px] border-1 pb-0.5  rounded-4xl bg-zinc-100 gap-3 flex justify-center items-center text-sm font-medium">

        <div className="ca mr-0.5 gap-2 flex"> <div className="">&#x2022;</div> <h1>Home</h1></div>
        <div className="cb">New Courses</div>
      </div>    </div>
        
      <div className="c2 flex justify-between items-center gap-3">
        <div className="w-[60px] h-[35px] border-zinc-400 border-1 pb-0.5 text-sm font-medium   rounded-4xl bg-zinc-100 flex justify-center items-center">Home</div>
        <div className="w-[75px] h-[35px] border-zinc-400 border-1 pb-0.5    text-sm font-medium rounded-4xl bg-zinc-100 flex justify-center items-center">Courses</div>
        <div className="w-[100px] h-[35px] border-zinc-400 border-1 pb-0.5   text-sm font-medium rounded-4xl bg-zinc-100 flex justify-center items-center">Mentorship</div>
        <div className="w-[65px] h-[35px] border-zinc-400 border-1 pb-0.5    text-sm font-medium rounded-4xl bg-zinc-100 flex justify-center items-center">About</div>
      </div>

    </div>
  )
}
export default header