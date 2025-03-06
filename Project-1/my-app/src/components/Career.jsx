
// import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

// import myImage from './assets/myimage.jpg'; // Adjust path accordingly
const Career = () => {

  







  return (
    <div className="">
    <div className='flex justify-center items-center gap-[60px]'>  
        {/* <div className="image">   <img src={myImage} alt="My Image" width="300" /></div> */}
        <img className='rounded-4xl mt-[40px] ml-[70px] mb-[100px]' src="https://nrl7nb5jvu6tvffc.public.blob.vercel-storage.com/career-riJMZ4Z92Br6Faf7SkCGqFbLmqzqHR.jpg" alt="Online Image" width="600" />

       
      <div className="mt-[-100px]">
      <h2 class="font-medium text-[32px]">Achieve Your Career Goals with Expert Support</h2>
      <p class="mt-5">
                Join our mentorship program and benefit from structured guidance tailored to help you succeed. From
                resources to networking opportunities, we take care of everything so you can focus on mastering your
                skills.
            </p>

            <div className="mt-10">
            <h3 class=" text-xl font-medium">Personalized Learning</h3>
                    <p class="">
                        Customized curriculum to meet your individual goals.
                    </p>
            </div>

            <div className="mt-10">
            <h3 class="text-xl font-medium">Global Networking</h3>
                    <p class="">
                        Connect with a community of learners and industry professionals.
                    </p>
            </div>          
            <div className="mt-10">
            <h3 class="text-xl font-medium">Zero Setup Costs</h3>
                    <p class="">
                        Begin without any upfront expenses; all resources are included.
                    </p>
            </div>


      </div>
      
        
    </div>
    {/* <div className="about"></div> */}
    </div>
  )
}

export default Career