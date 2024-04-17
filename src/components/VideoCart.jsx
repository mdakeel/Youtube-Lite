import React, { useEffect, useState } from 'react'
import axios from 'axios'
import API_KEY from '../Constant/YouTube'

export const VideoCart = ({item}) => {
  const [profile, setProfile] = useState("");
  const getYoutubeChannelName = async () =>{
    try {
        const res = await axios.get(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${item.snippet.channelId}&key=${API_KEY}`)
        setProfile(res.data.items[0].snippet.thumbnails.high.url);
    } catch (error) {
        console.log(error);
    }
}

useEffect(()=>{
    getYoutubeChannelName();
},[getYoutubeChannelName])

  return (
    <>
    <div className='flex flex-col  w-full cursor-pointer' >
        <img className=" rounded-xl w-full " src={item.snippet.thumbnails.medium.url} alt="" />
       <div className='flex flex-col'>
        <div className='flex mt-2 '>
            <img src={profile} alt="profile-img" className='w-8 h-8 rounded-full'/>
            <div className='ml-2 px-1'>
            <h1 className='font-bold'>{item.snippet.title}</h1>
            <p className='text-sm text-gray-500'>{item.snippet.channelTitle}</p>
            {/* <div className='flex  items-center space-x-1 '>
                <p className='text-[13px] text-gray-500'>{item.statistics.viewCount}</p>
                <p className='text-[6px] text-gray-500 font-extrabold' >o</p>
                <p className='text-[13px] text-gray-500'>2 months ago</p>
           </div> */}
            </div>
        </div>
       
            
        </div>
       
    </div>
    </>  
    
  )
}
