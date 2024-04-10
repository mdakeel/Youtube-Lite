
import React from 'react'

// images
import short from "../assets/short.png"
import profile from "../assets/profile-img.png"

// react icons
import { CiHome } from "react-icons/ci";
import { MdOutlineSubscriptions } from "react-icons/md";
import { VscAccount } from "react-icons/vsc";
import { GoHistory } from "react-icons/go";
import { GoVideo } from "react-icons/go";
import { MdOutlineWatchLater } from "react-icons/md";
import { GrCut } from "react-icons/gr";
import { GoChevronDown } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";

export const Sidebar = () => {

    const sidebarItems = [
        { icons: <CiHome size={"20px"} />, title: "Home"},
        { icons: <img src={short} alt="" className='w-5 '/>, title: "Shorts"},
        { icons: <MdOutlineSubscriptions size={"20px"} className='text-gray-600' />, title: "Subscriptions"}
    ]

    const sidebarYou = [
        {icons: <VscAccount size={"20px"} className='text-gray-700' />, title: "Your Channel"},
        {icons: <GoHistory size={"20px"} />, title: "History"},
        {icons: <GoVideo size={"20px"}  className='text-gray-700' />, title: "Your videos"},
        {icons: <MdOutlineWatchLater size={"20px"} className='text-gray-700' />, title: "Watch later"},
        {icons: <GrCut size={"20px"} className='text-gray-700' />, title: "Your clips"},
        {icons: <GoChevronDown size={"20px"} />, title: "Show more"},
        
    ]

    const sidebarSub = [
        {icons: <img src={profile} alt='' className='rounded-full w-6 h-6' />, title: "Know Your Creator"},
        {icons: <img src={profile} alt='' className='rounded-full w-6 h-6' />, title: "Know Your Creator"},
    ]

    const sidebarExplore = [
        {icons: <VscAccount size={"20px"} className='text-gray-700' />, title: "Trending"},
        {icons: <VscAccount size={"20px"} className='text-gray-700' />, title: "Shopping"},
        {icons: <VscAccount size={"20px"} className='text-gray-700' />, title: "Music"},
        {icons: <VscAccount size={"20px"} className='text-gray-700' />, title: "Movies"},
        {icons: <VscAccount size={"20px"} className='text-gray-700' />, title: "Live"},
        {icons: <VscAccount size={"20px"} className='text-gray-700' />, title: "Gaming"},
        {icons: <VscAccount size={"20px"} className='text-gray-700' />, title: "News"},
        {icons: <VscAccount size={"20px"} className='text-gray-700' />, title: "Sports"},
        {icons: <VscAccount size={"20px"} className='text-gray-700' />, title: "Courses"},
        {icons: <VscAccount size={"20px"} className='text-gray-700' />, title: "Fashion & Beauty"},
        {icons: <VscAccount size={"20px"} className='text-gray-700' />, title: "Podcasts"},
    ]

  return (
    <div>
            <div className='absolute h-[calc(100vh-3.8rem)] w-[16%] left-0  mt-[60px] overflow-y-scroll overflow-x-hidden '>
                {/* Main menu */}
                <div className='m-4'>
                    {
                        sidebarItems.map((items, index) => {
                            return(
                                <div key={index} className='flex items-center hover:bg-gray-100 px-2 space-x-6 py-2 rounded-md cursor-pointer first:bg-gray-100'>
                                    {items.icons}
                                    <p className='text-[14px] '>{items.title}</p>
                                </div>
                            )
                        })
                    }
                </div>  
                <hr />

                {/* You menu */}
                 <div className='flex ml-6 mt-4 text-[17px] items-center font-medium cursor-pointer'><h3>You</h3><IoIosArrowForward /></div>
                <div className='m-4'>
                    {
                        sidebarYou.map((items, index) => {
                            return(
                                <div key={index} className='flex  items-center  hover:bg-gray-100 px-2 space-x-6 py-2 rounded-md cursor-pointer '>
                                    {items.icons}
                                    <p className='text-[14px]  '>{items.title}</p>
                                </div>
                            )
                        })
                    }
                </div>  
                <hr />

                {/* Subscription menu */}
                <div className='flex ml-6 mt-4 text-[17px] items-center font-medium cursor-pointer'><h3>Subscriptions</h3></div>
                <div className='m-4'>
                    {
                        sidebarSub.map((items, index) => {
                            return(
                                <div key={index} className='flex items-center hover:bg-gray-100 px-2 space-x-6 py-2 rounded-md cursor-pointer '>
                                    {items.icons}
                                    <p className='text-[14px]  '>{items.title}</p>
                                </div>
                            )
                        })
                    }
                </div>  
                <hr />

                {/* Explore */}
                <div className='flex ml-6 mt-4 text-[17px] items-center font-medium cursor-pointer'><h3>Explore</h3></div>
                <div className='m-4'>
                    {
                        sidebarExplore.map((items, index) => {
                            return(
                                <div key={index} className='flex  items-center hover:bg-gray-100 px-2 space-x-6 py-2 rounded-md cursor-pointer '>
                                    {items.icons}
                                    <p className='text-[14px]  '>{items.title}</p>
                                </div>
                            )
                        })
                    }
                </div>  
                <hr />
        </div>
    </div>
  )
}
