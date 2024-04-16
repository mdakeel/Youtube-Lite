// // import React, { useEffect, useState } from 'react'
// // import axiox from "axios"
// // import API_KEY, { YOUTUBE_VIDEOS_API} from '../Constant/YouTube'
// // import { VideoCart } from './VideoCart'
// // import { Link } from "react-router-dom"
// // import axios from 'axios'

// // export const Feed = () => {
// //    const [video, setVideo] = useState([]);
// //   const fetchVideos = async () => {
// //     try {
// //       const res = await axiox.get(`${YOUTUBE_VIDEOS_API}`);
// //       console.log(res?.data?.items)
// //        setVideo(res?.data?.items);
// //     } catch (error) {
// //       console.log(error)
// //     }
    
// //   }

// //   const fetchVideoByCategory = async () => {

// //     try {
// //       const res = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=&type=video&key=${API_KEY}`)
// //     } catch (error) {
// //       console.log(error)
// //     }
// // }
  
// //   useEffect(()=>{
// //      fetchVideos();
// //      fetchVideoByCategory();
// //   }, []);

// import React, { useEffect, useState } from 'react'
// import axios from "axios";
// import API_KEY, { YOUTUBE_VIDEO_API } from '../constant/youtube';
// import VideoCart from './VideoCart';
// import { Link } from 'react-router-dom';
// import { useDispatch, useSelector } from "react-redux";
// import { setHomeVideo } from '../utils/appSlice';



// const VideoContainer = () => {
//     const { video, category } = useSelector((store) => store.app);
//     console.log(category);
//     const dispatch = useDispatch();
//     // jab bhi api call/network call kr rhe ho toh apko hmesha useEffect use krna hai
//     const fetchingYoutubeVideo = async () => {
//         try {
//             const res = await axios.get(`${YOUTUBE_VIDEO_API}`);
//             dispatch(setHomeVideo(res?.data?.items))
//         } catch (error) {
//             console.log(error);
//         }

//     }
//     const fetchVideoByCategory = async (category) => {
//         try {
//             const res = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${category}&type=video&key=${API_KEY}`);
//             dispatch(setHomeVideo(res?.data?.items))
//         } catch (error) {
//             console.log(error);
//         }
//     }
//     useEffect(() => {
//         if (category === "All") {
//             fetchingYoutubeVideo();
//         } else {
//             fetchVideoByCategory(category);
//         }
//     }, [category]);

//   return (
//     <div className='flex   pt-[120px] p-4 grid lg:grid-cols-3 sm:grid-cols-2  gap-4'>
//       {
//         video.map((item) => {
//           return (
//             <Link to={`/watch?v=${item.id}`} key={item.id}>
//                <VideoCart key={item.id} item = {item} />
//             </Link>
           
//           )
//         })
//       }
//     </div>
//   )
// }


import React, { useEffect} from 'react'
import axios from "axios";
import API_KEY, { YOUTUBE_VIDEOS_API } from '../Constant/YouTube';
import { VideoCart } from './VideoCart';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { setHomeVideo } from '../utils/appSlice';



export const Feed = () => {
    const { video, category } = useSelector((store) => store.app);
    const dispatch = useDispatch();
    // jab bhi api call/network call kr rhe ho toh apko hmesha useEffect use krna hai
    const fetchingYoutubeVideo = async () => {
        try {
            const res = await axios.get(`${YOUTUBE_VIDEOS_API}`);
            dispatch(setHomeVideo(res?.data?.items))
        } catch (error) {
            console.log(error);
        }

    }
    const fetchVideoByCategory = async (category) => {
        try {
            const res = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${category}&type=video&key=${API_KEY}`);
            dispatch(setHomeVideo(res?.data?.items))
            console.log(res)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        if (category === "All") {
            fetchingYoutubeVideo();
        } else {
            fetchVideoByCategory(category);
        }
    }, [category]);

    return (
        <div className='flex pt-[120px] p-4 grid lg:grid-cols-3 sm:grid-cols-2  gap-4'>
            {
                video.map((item) => {
                    console.log(item);
                    return (
                        <Link to={`/watch?v=${typeof item.id === 'object' ? item.id.videoId : item.id }`} key={typeof item.id === 'object' ? item.id.videoId : video.id } >
                            <VideoCart item={item} />
                        </Link>

                    )
                })
            }

        </div>
    )
}

