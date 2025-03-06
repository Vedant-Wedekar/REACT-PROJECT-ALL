import React from 'react'

const Footer = () => {
  return (
    <div class="gradient w-full h-[500px] grid justify-items-center  ">
      <h2 class="text-4xl font-medium">Stay Informed With Our Newsletter</h2>
            <p class="subscription__description mt-[-50px]">
                Sign up to receive insights and updates from our students and experts.
                Stay connected and discover new ways to enhance your learning experience.
            </p>
            <div className=" mt-[-60px]">
            <div className="w-[400px] h-[40px] rounded-4xl border-1 bg-white flex items-center justify-between">
                <input type="text" placeholder="Enter your email " className="ml-2 bg-white text-[12px]"/>
                <div className="bg-[#b0d4ff]  mr-[7px] w-[70px] h-[30px] text-[12px] font-medium flex justify-center items-center rounded-4xl">Subscribe</div>
                </div> 
            </div>

            <div className="flex justify-evenly items-center gap-[300px]">
<div className="text-2xl font-medium pb-[65px] ">Logo.</div>
<div className="grid "> 
<a href="#" class="footer__link ">Courses</a>
                    <a href="#" class="footer__link py-3">Mentors</a>
                    <a href="#" class="footer__link py-2">FAQs</a>
                    <a href="#" class="footer__link ">Contact Us</a>
</div>

<div className="grid">
<a href="#" class="footer__link">Blog</a>
                    <a href="#" class="footer__link py-3">Careers</a>
                    <a href="#" class="footer__link py-3">Partnerships</a>
                    <a href="#" class="footer__link ">Privacy Policy</a>
</div>
<div className="grid">
<a href="#" class="footer__link">Instagram</a>
                    <a href="#" class="footer__link py-3">Youtube</a>
                    <a href="#" class="footer__link py-3">Github</a>
                    <a href="#" class="footer__link">LinkedIn</a>
</div>








            </div>


            <p class="copyright text-center text-[12px] font-medium">Copyright © 2025 Vedant Wedekar. All rights reserved.</p>
    </div>
  )
}

export default Footer