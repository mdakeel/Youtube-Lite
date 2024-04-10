import React from 'react'
// images
import logo from "../assets/logo.png"
import profile from "../assets/profile-img.png"

// react icons
import { AiOutlineMenu } from "react-icons/ai";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiVideoOn } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";

export const Navbar = () => {
  return (
    <div className='w-full fixed top-0 z-10'>
    <div className='flex justify-between px-[25px] z-10 bg-white '>
        <div className='flex items-center'>
        <AiOutlineMenu  size={"24px"} />
        <img src={logo} width={"115px"} alt="" className='px-3'/>
        </div>
              <div className="flex items-center w-[40%] m-2 cursor-pointer">             
                <input
                  type="search"
                  id="search"
                  className="w-full  py-2 px-4 border border-gray-300 outline-none rounded-l-full "
                  placeholder="Search "
                  required
                />
                 <button className=" px-4 py-2 border border-gray-300 rounded-r-full bg-gray-50 hover:bg-gray-100 cursor-pointer"><CiSearch size={"24px"} className='text-gray-600' /></button>
              </div>
        <div className='flex justify-between items-center w-[10%]'>
          <div className='cursor-pointer hover:bg-gray-100 rounded-full p-2 '><CiVideoOn size={"24px"} className='w-6 h-6'/></div>
        
          <div className='cursor-pointer hover:bg-gray-100 rounded-full p-2 '><IoIosNotificationsOutline size={"24px"} className='w-6 h-6' /></div>
        <img src={profile} alt="" className='rounded-full w-8 h-8 cursor-pointer'/>
        </div>
    </div>
    </div>
  )
}
