import React from 'react'
// images
import logo from "../assets/logo.png"
import profile from "../assets/profile-img.png"

// react icons
import { AiOutlineMenu } from "react-icons/ai";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiVideoOn } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { MdKeyboardVoice } from "react-icons/md";



export const Navbar = () => { 
  

  return (
    <div className='w-full fixed top-0 z-10'>
    <div className='flex justify-between pl-[16px] pr-[25px] z-10 bg-white '>
        <div className='flex items-center space-x-2 cursor-pointer'>
          <div className='hover:bg-gray-200 p-2 rounded-full '>     <AiOutlineMenu  size={"22px"} /></div>
   
        <img src={logo} width={"115px"} alt="" className='px-3'/>
        </div>
              <div className="flex items-center w-[44%] m-2 space-x-4 cursor-pointer"> 
              <div className='flex w-full '>          
                <input
                  type="search"
                  id="search"
                  className="w-full   px-4 border  py-[8px] border-gray-300 outline-none rounded-l-full "
                  placeholder="Search "
                  required
                />
                 <button className=" px-4 py-[8px] border border-gray-300 rounded-r-full bg-gray-50 hover:bg-gray-100 cursor-pointer"><CiSearch size={"24px"} className='text-gray-600' /></button>
                 </div>  
                 <div className="bg-gray-100 p-[10px] rounded-full hover:bg-gray-200 " ><MdKeyboardVoice size={"20px"} className='text-gray-900 '/></div>
                 
              </div>
              
        <div className='flex justify-between items-center w-[10%]'>
          <div className='cursor-pointer hover:bg-gray-100 rounded-full p-[8px] '><CiVideoOn size={"24px"} /></div>
        
          <div className='cursor-pointer hover:bg-gray-100 rounded-full p-[8px] '><IoIosNotificationsOutline size={"24px"} /></div>
        <img src={profile} alt="" className='rounded-full w-8 h-8 cursor-pointer'/>
        </div>
    </div>
    </div>
  )
}
