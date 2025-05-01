import React from 'react'
import { CiMenuFries } from "react-icons/ci";
import { IoSearchOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { GoPerson } from "react-icons/go";
const Header = () => {
  return (
    <div className='header w-full h-22  flex justify-between items-center '> 
        <div className="icon-first flex gap-3 justify-evenly items-center ml-10">
             <CiMenuFries style={{width:'21px',height:'21px'}}/>
             <a>Menu</a>
             <IoSearchOutline style={{width:'21px',height:'21px'}} />
             <a>Search</a>
        </div>
        <div className="logo text-3xl mr-6 font-medium">
        LUCIEN NOIR
        </div>
        <div className="icon-second flex gap-3 justify-evenly items-center mr-10">
            <a>Call Us</a>
            <CiHeart style={{width:'21px',height:'21px'}} />
            <GoPerson  style={{width:'21px',height:'21px'}} />

        </div>
      
    </div>
  )
}

export default Header
