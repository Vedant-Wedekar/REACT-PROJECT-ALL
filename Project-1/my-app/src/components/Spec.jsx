import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Spec = () => {
  return (
    <div className='w-full '>
        <div className="flex justify-center items-center mt-[100px]">
<h5 className='text-5xl font-medium'>Specifications</h5></div>

<div className="flex gap-[60px]">
    <div className="con w-1/2 mt-[150px] ml-[70px]">
      <div className="text-3xl font-medium">Unlock Your Full Potential</div>
      <div className="mt-[15px] text-sm"> Our tailored web development courses are designed to equip you with essential skills and industry
                insights. With flexible learning modes and durations, you’ll find a path that perfectly fits your needs,
                from intensive bootcamps to in-depth mentorships.</div>
                <div className="flex mt-[50px] justify-between">
                  <div className="one "> <h3 class="program__label font-bold mb-[15px]">Course Durations</h3>
                    <ul class="program__duration-list">
                        <li class="program__duration-item">1 Month: Fast-Track Intensive</li>
                        <li class="program__duration-item">3 Months: Standard Learning Path</li>
                        <li class="program__duration-item">6 Months: In-Depth Exploration</li>
                        <li class="program__duration-item">1 Year: Comprehensive Mastery</li>
                    </ul></div>
                  <div className="two "> <h3 class="program__label font-bold mb-[15px]">Course Durations</h3>
                    <ul class="program__format-list">
                        <li class="program__format-item">Self-Paced: Study at your own rhythm</li>
                        <li class="program__format-item">Instructor-Led: Interactive classes with live feedback</li>
                        <li class="program__format-item">Mentorship: One-on-one guidance</li>
                        <li class="program__format-item">Bootcamp: Immersive, hands-on experience</li>
                    </ul></div>
                </div>
    </div>

    <div className="image  mt-[50px]  "><img className='rounded-4xl h-[550px] w-[530px]'  src='https://nrl7nb5jvu6tvffc.public.blob.vercel-storage.com/specifications-FycnNzXg9Vi49Cu24pcaWjaLLENgnF.jpg'></img></div>
</div>
      <div className="h-[100px]"></div>

    </div>
  )
}
export default Spec