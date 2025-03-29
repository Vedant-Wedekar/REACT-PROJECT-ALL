  // import React from 'react'
  // import star from '../assets/strat.png'
  // const Flamigo = () => {
  //   return (
  //     <div className='flex justify-evenly items-center w-full h-[500px] '>
  //       <div className="w-30 h-15 bg-black rounded-4xl text-white flex justify-center items-center ml-[-450px] mt-[-280px]"> Our Value</div>
  //       <div className="pol h-[500px] w-[400px] bg-[#ffffff] grid transform translate-y-[-100px] translate-x-[400px] ">
  //       <div className="h-[60px] flex justify-center items-center w-[60px] rounded-full ml-[320px] mt-7 border-2">&larr;</div>

  //         <div className="ml-[100px] font-medium text-2xl mt-[10px] transform translate-y-[100px] ">Explore our curated list of must-vist destinations around the globe.</div>
  //         <hr className='mt-[100px]' />
  //         <div className="flex justify-evenly items-center">
  //           <div className="">(first)</div>
  //           <div className="">(present)</div>
  //           <div className="">01</div>
  //         </div>
  //       </div>
  //       <div className="grid">

  //         <div className="flex justify-end items-start">
  //           <div className="text-2xl font-medium ">Every journey <br></br> is unique</div>
  //       <div className="h-[60px] flex justify-center items-center w-[60px] rounded-full border-2">&rarr;</div>
            

  //           <div className="flex justify-center items-center">
  //             <div className="grid"> <div className="flex justify-center items-center">
  //             <div className=""><img className='w-10' src={star} alt="" /></div>
  //             <div className="">4.9</div>
  //             </div>
  //             <div className="grid">
  //               <img src=''></img>
  //             </div>
              
  //             </div>
          
  //           </div>
  //         </div>


import React from 'react'
import star from '../assets/star.png'
import pro from '../assets/profile.png'
import { CiSearch } from "react-icons/ci";
const Flamigo = () => {
  return (
    <div className='flex justify-start items-center w-full h-[500px] '>
      <div className="grid px-3"> 

      <div className="h-8 w-28 bg-black rounded-4xl text-white flex justify-center items-center mb-15 mt-20">our value</div>
      <div className="font-medium text-[40px]"><p>Every Journey</p>is unique<p></p></div>
      <div className="flex justify-start items-center gap-2 mt-15">
        <img className='w-10' src={star} alt="" />
        <h1>4.9</h1>
      </div>
      <div className="h-30 w-30 rounded-2xl bg-[#f5f2f2]">
        <div className="flex justify-space-evenly items-center gap-5 py-3">   <img className="h-10 w-10 rounded-full " src={pro}></img>
        <div className="h-7 w-7 bg-white rounded-full flex justify-center items-center">  <CiSearch /></div> </div>
        
        <div className="font-medium ">Your Partner <br></br>in Design</div>
      </div>

      </div>
     
    </div>
  )
}

export default Flamigo


















  //       </div>
  //     </div>
  //   )
  // }

  // export default Flamigo
