import React, { useEffect, useState } from 'react'
import axios from 'axios'
import API_KEY from '../Constant/YouTube'

export const WatchVideo = ({item}) => {
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
},[])

  return (
    <>
    <div className='flex  w-full mt-4  justify-start space-x-2 w-full h-auto ' >
      
         <img src={item.snippet.thumbnails.medium.url} alt="" className=" w-[40%] h-fit rounded-lg" />
                <div className='leading-relaxed' >
                  <h1 className='text-[13px] leading-normal font-medium'>{item.snippet.title}</h1>
                  <h3 className='text-[12px] font-medium  '>{item.snippet.channelTitle}</h3>
                  <div className='flex items-center space-x-2'>
                    {/* <p className='text-[12px] '>{item.statistics.viewCount}</p> */}
                    <p className='text-[12px] '>1 year ago</p>
                  </div>
                </div>
       
    </div>

    </>  
    
  )
}
