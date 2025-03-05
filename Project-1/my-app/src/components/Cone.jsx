import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
// import myImage from './assets/myimage.jpg'; // Adjust path accordingly
const Cone = () => {
  return (
    <div className='flex justify-center items-center gap-[60px]'>  
        {/* <div className="image">   <img src={myImage} alt="My Image" width="300" /></div> */}
        <img className='rounded-4xl mt-[70px] ml-[00px]' src="https://miro.medium.com/v2/resize:fit:1400/1*y1KgG2cuZQXCjf-tFy2psQ.png" alt="Online Image" width="540" />

        <div className="detail grid grid-rows-5 gap-2">
          <div className="text-5xl font-bold">Mastering Web Development</div>
          <div className="two">
            <div className="text flex justify-baseline items-center"><h2 className='font-bold'>By-Vedant Wedekar</h2> <div className=" ml-3 mb-[-0px] flex gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" height="13px" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
              <svg xmlns="http://www.w3.org/2000/svg" height="13px" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
              <svg xmlns="http://www.w3.org/2000/svg" height="13px" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
              <svg xmlns="http://www.w3.org/2000/svg" height="13px" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg><svg xmlns="http://www.w3.org/2000/svg" height="13px" viewBox="0 0 576 512"><path d="M288 376.4l.1-.1 26.4 14.1 85.2 45.5-16.5-97.6-4.8-28.7 20.7-20.5 70.1-69.3-96.1-14.2-29.3-4.3-12.9-26.6L288.1 86.9l-.1 .3 0 289.2zm175.1 98.3c2 12-3 24.2-12.9 31.3s-23 8-33.8 2.3L288.1 439.8 159.8 508.3C149 514 135.9 513.1 126 506s-14.9-19.3-12.9-31.3L137.8 329 33.6 225.9c-8.6-8.5-11.7-21.2-7.9-32.7s13.7-19.9 25.7-21.7L195 150.3 259.4 18c5.4-11 16.5-18 28.8-18s23.4 7 28.8 18l64.3 132.3 143.6 21.2c12 1.8 22 10.2 25.7 21.7s.7 24.2-7.9 32.7L438.5 329l24.6 145.7z"/></svg>
               <div className="text mb-[0px] "></div>
               </div> <h2 className='mb-[px]'>(6950 review)</h2>
               </div>
           
          </div>
          <div className="text-xl font-bold">Select Learning Mode</div>

          <div className="c2 flex justify-between items-center ml-3 ">
        <div className="flex gap-3">
        <div className="w-[100px] h-[35px] border-zinc-400 border-1 pb-0.5 text-sm font-medium   rounded-4xl bg-zinc-100 flex justify-center items-center">Self Study</div>
        <div className="w-[75px] h-[35px]  pb-0.5    text-sm font-medium rounded-4xl bg-[#EDEFDE] flex justify-center items-center">Live Led</div>
        <div className="w-[100px] h-[35px] border-zinc-400 border-1 pb-0.5   text-sm font-medium rounded-4xl bg-zinc-100 flex justify-center items-center">Mentorship</div>
        <div className="w-[100px] h-[35px] border-zinc-400 border-1 pb-0.5    text-sm font-medium rounded-4xl bg-zinc-100 flex justify-center items-center">Bootcamp</div>
</div> 
</div>

          <div className="text-xl font-bold">Select Duration</div>
          <div className="c2 flex justify-between items-center gap-3 ml-3">
<div className="flex gap-3">
        <div className="w-[90px] h-[35px] border-zinc-400 border-1 pb-0.5 text-sm font-medium   rounded-4xl bg-zinc-100 flex justify-center items-center">1 Month</div>
        <div className="w-[90px] h-[35px] border-zinc-400 border-1 pb-0.5    text-sm font-medium rounded-4xl bg-zinc-100 flex justify-center items-center">3 Month</div>
        <div className="w-[100px] h-[35px] border-zinc-400 border-1 pb-0.5   text-sm font-medium rounded-4xl bg-zinc-100 flex justify-center items-center">6 Month</div>
        <div className="w-[85px] h-[35px]  pb-0.5    text-sm font-medium rounded-4xl bg-[#EDEFDE] flex justify-center items-center">1 Year</div>
</div>
          </div>

          <div className="text-xl font-bold">Price</div>
          <div className="text ml-4"><div className="text-xl font-medium">&#8377;1690.00 <del className='text-l font-normal text-zinc-400'>&#8377;5999</del></div>
          </div>
          <div className="c2 flex justify-between items-center gap-3">
            <div className="flex gap-3">
        <div className="w-[150px] h-[45px] border-zinc-400 border-1 pb-0.5 text-sm font-medium   rounded-4xl bg-[#63c466] text-white flex justify-center items-center">Get Started</div>
        <div className="w-[150px] h-[45px] border-zinc-400 border-1 pb-0.5    text-sm font-medium rounded-4xl bg-zinc-100 flex justify-center items-center">More Details</div>
         </div> </div>


        </div>
    </div>
  )
}

export default Cone