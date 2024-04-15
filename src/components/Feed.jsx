import React, { useEffect, useState } from 'react'
import axiox from "axios"
import { YOUTUBE_VIDEOS_API} from '../Constant/YouTube'
import { VideoCart } from './VideoCart'
import { Link } from "react-router-dom"

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
    <div className='flex   pt-[120px] p-4 grid lg:grid-cols-3 sm:grid-cols-2  gap-4'>
      {
        video.map((item) => {
          return (
            <Link to={`/watch?v=${item.id}`} key={item.id}>
               <VideoCart key={item.id} item = {item} />
            </Link>
           
          )
        })
      }
    </div>
  )
}
