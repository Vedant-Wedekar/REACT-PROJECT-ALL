import React from 'react'
import star from '../assets/strat.png'
const Flamigo = () => {
  return (
    <div className='flex justify-evenly items-center w-full h-[500px] '>
      <div className="w-30 h-15 bg-black rounded-4xl text-white flex justify-center items-center ml-[-450px] mt-[-280px]"> Our Value</div>
      <div className="pol h-[500px] w-[400px] bg-[#ffffff] grid transform translate-y-[-100px] translate-x-[400px] ">
      <div className="h-[60px] flex justify-center items-center w-[60px] rounded-full ml-[320px] mt-7 border-2">&larr;</div>

        <div className="ml-[100px] font-medium text-2xl mt-[10px] transform translate-y-[100px] ">Explore our curated list of must-vist destinations around the globe.</div>
        <hr className='mt-[100px]' />
        <div className="flex justify-evenly items-center">
          <div className="">(first)</div>
          <div className="">(present)</div>
          <div className="">01</div>
        </div>
      </div>
      <div className="grid">

        <div className="flex justify-end items-start">
          <div className="text-2xl font-medium ">Every journey <br></br> is unique</div>
      <div className="h-[60px] flex justify-center items-center w-[60px] rounded-full border-2">&rarr;</div>
          

          <div className="flex justify-center items-center">
            <div className="grid"> <div className="flex justify-center items-center">
            <div className=""><img className='w-10' src={star} alt="" /></div>
            <div className="">4.9</div>
            </div>
            <div className="grid">
              <img src=''></img>
            </div>
            
            </div>
         
          </div>
        </div>




















      </div>
    </div>
  )
}

export default Flamigo
