import React, { useState } from 'react'
import {useDispatch} from "react-redux";
import { setCategory } from '../utils/appSlice';


const buttonList = ["All", "Allamasyedabdullahtariq", "Know Your Creator", "Javascript","Java", "Live", "Music", "Songs", "Vlogs", "Trending", "Programming", "News", "Technology", "Cricket", "Comedy", "Thriller", "New to you", "Computer Programming", "Netlify", "Coding"]

export const Buttons = () => {
  const [active, setActive] = useState("All");
  const dispatch = useDispatch();

  const videoByTag = (tag) => {
    if (active !== tag) {
      dispatch(setCategory(tag));
      setActive(tag);
    }
  }
  console.log(active);
  
  return (
    <div className='flex w-full fixed mt-[55px] bg-white overflow-x-scroll no-scrollbar px-2'>
      {
      buttonList.map((buttonName, index) => {
        return (
        <div key={index} >
          <button onClick={() => {videoByTag(buttonName)}} className={`${active === buttonName ? "bg-slate-900 text-white" : "bg-gray-100"} bg-gray-100 w-fit  font-sans mx-2 px-4 py-[6px] my-3 text-[14px]  font-medium   rounded-lg  `}><span className='whitespace-nowrap '>{buttonName}</span></button>
        </div>
     
      )
    })
    }
    </div>
  )
}
