
import React, { useEffect} from 'react'
import axios from "axios";
import API_KEY, { YOUTUBE_VIDEOS_API } from '../Constant/YouTube';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { setHomeVideo } from '../utils/appSlice';
import {WatchVideo} from './WatchVideo'



export const WatchFeed = () => {
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
            const res = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${category}&type=video&key=${API_KEY}`);
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
    }, [category,  fetchingYoutubeVideo, fetchVideoByCategory]);

    return (
        <div className=' '>
            {
                video.map((item) => {
                    console.log(item);
                    return (
                        <Link to={`/watch?v=${typeof item.id === 'object' ? item.id.videoId : item.id }`} key={typeof item.id === 'object' ? item.id.videoId : video.id } >
                            <WatchVideo item={item} />
                        </Link>

                    )
                })
            }

        </div>
    )
}

