import React, { useEffect, useState } from 'react'
import axiox from "axios"
import { YOUTUBE_VIDEOS_API} from '../Constant/YouTube'
import { VideoCart } from './VideoCart'

export const Feed = () => {
   const [video, setVideo] = useState([]);
  const fetchVideos = async () => {
    try {
      const res = await axiox.get(`${YOUTUBE_VIDEOS_API}`);
      console.log(res?.data?.items)
       setVideo(res?.data?.items);
    } catch (error) {
      console.log(error)
    }
    
  }
  
  useEffect(()=>{
     fetchVideos();
  }, []);

  return (
    <div className='flex lg:w-[84%] lg:ml-[16%]  py-[120px] px-4 grid lg:grid-cols-3 sm:grid-cols-2  gap-4'>
      {
        video.map((item) => {
          return (
            <VideoCart key={item.id} item = {item} />
          )
        })
      }
    </div>
  )
}
