
import React from 'react'

// images
import short from "../assets/short.png"
import profile from "../assets/profile-img.png"
import azra from "../assets/azra.png"

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
import { PiFireBold } from "react-icons/pi";
import { AiOutlineShopping } from "react-icons/ai";
import { IoMusicalNoteOutline } from "react-icons/io5";
import { MdOutlineMovie } from "react-icons/md";
import { MdLiveTv } from "react-icons/md";
import { IoGameControllerOutline } from "react-icons/io5";
import { HiOutlineNewspaper } from "react-icons/hi2";
import { TfiCup } from "react-icons/tfi";
import { AiOutlineBulb } from "react-icons/ai";
import { TbHanger } from "react-icons/tb";
import { MdOutlinePodcasts } from "react-icons/md";
import { FaYoutube } from "react-icons/fa6";
import { SiYoutubestudio } from "react-icons/si";
import { SiYoutubemusic } from "react-icons/si";
import { TbBrandYoutubeKids } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";
import { RiFlagLine } from "react-icons/ri";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { RiFeedbackLine } from "react-icons/ri";

export const Sidebar = () => {

    const sidebarItems = [
        { icons: <CiHome size={"22px"} />, title: "Home"},
        { icons: <img src={short} alt="" className='w-5 '/>, title: "Shorts"},
        { icons: <MdOutlineSubscriptions size={"20px"} className='text-gray-600' />, title: "Subscriptions"}
    ]

    const sidebarYou = [
        {icons: <VscAccount size={"20px"} className='text-gray-700' />, title: "Your Channel"},
        {icons: <GoHistory size={"20px"} />, title: "History"},
        {icons: <GoVideo size={"19px"}  className='text-gray-700' />, title: "Your videos"},
        {icons: <MdOutlineWatchLater size={"22px"} className='text-gray-700' />, title: "Watch later"},
        {icons: <GrCut size={"20px"} className='text-gray-700' />, title: "Your clips"},
        {icons: <GoChevronDown size={"20px"} />, title: "Show more"},
        
    ]

    const sidebarSubscriptions = [
        {icons: <img src={profile} alt='' className='rounded-full w-6 h-6' />, title: "Know Your Creator"},
        {icons: <img src={azra} alt='' className='rounded-full w-6 h-6' />, title: "Azra Naaz"},
    ]

    const sidebarExplore = [
        {icons: <PiFireBold size={"22px"} className='text-gray-700' />, title: "Trending"},
        {icons: <AiOutlineShopping size={"22px"} className='text-gray-700' />, title: "Shopping"},
        {icons: <IoMusicalNoteOutline size={"22px"} className='text-gray-700' />, title: "Music"},
        {icons: <MdOutlineMovie size={"20px"} className='text-gray-700' />, title: "Movies"},
        {icons: <MdLiveTv size={"20px"} className='text-gray-700' />, title: "Live"},
        {icons: <IoGameControllerOutline size={"20px"} className='text-gray-700' />, title: "Gaming"},
        {icons: <HiOutlineNewspaper size={"20px"} className='text-gray-700' />, title: "News"},
        {icons: <TfiCup size={"19px"} className='text-gray-700' />, title: "Sports"},
        {icons: <AiOutlineBulb size={"20px"} className='text-gray-700' />, title: "Courses"},
        {icons: <TbHanger size={"20px"} className='text-gray-700' />, title: "Fashion & Beauty"},
        {icons: <MdOutlinePodcasts size={"20px"} className='text-gray-700' />, title: "Podcasts"},
    ]

    const fromMoreYoutube = [
        {icons: <FaYoutube size={"22px"} className='text-[#FF0000]' />, title: "YouTube Premium"},
        {icons: <SiYoutubestudio size={"21px"} className='text-[#FF0000]' />, title: "YouTube Studio"},
        {icons: <SiYoutubemusic size={"21px"} className='text-[#ff0000]' />, title: "YouTube Music"},
        {icons: <TbBrandYoutubeKids size={"22px"} className='text-[#ff0000]' />, title: "YouTube Kids"},
        
    ]

    const sidebarSettings = [
        {icons: <IoSettingsOutline size={"22px"} className='text-gray-700' />, title: "Settings"},
        {icons: <RiFlagLine size={"20px"} className='text-gray-700' />, title: "Report history"},
        {icons: <IoIosHelpCircleOutline size={"23px"} className='text-gray-700' />, title: "Help"},
        {icons: <RiFeedbackLine size={"20px"} className='text-gray-700' />, title: "Send feddback"},
        
    ]

  return (
    <div>
            <div className='absolute h-[calc(100vh-3.8rem)] w-[16%] left-0 mt-[60px] overflow-y-scroll overflow-x-hidden '>
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
                        sidebarSubscriptions.map((items, index) => {
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

                {/* More From Youtube */}
                <div className='flex ml-6 mt-4 text-[17px] items-center font-medium cursor-pointer'><h3>More from YouTube</h3></div>
                <div className='m-4'>
                    {
                        fromMoreYoutube.map((items, index) => {
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

                {/* Youtube settings */}
                <div className='m-4'>
                    {
                        sidebarSettings.map((items, index) => {
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

                {/* about privacy */}
                <div className='m-4 space-y-4'>
                <p className='text-[13px] font-semibold text-gray-600' >About Press Copyeight 
                    Contact Us Creators
                    Advertise Developers
                </p>
                <p className='text-[13px] font-semibold text-gray-600'>About Press Copyeight 
                    Contact Us Creators
                    Advertise Developers
                </p>
                </div>
            </div>
    </div>
  )
}
