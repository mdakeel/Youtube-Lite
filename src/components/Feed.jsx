import React, { useEffect, useCallback } from 'react'
import axios from "axios";
import API_KEY, { YOUTUBE_VIDEOS_API } from '../Constant/YouTube';
import { VideoCart } from './VideoCart';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { setHomeVideo } from '../utils/appSlice';

export const Feed = () => {
    const { video, category } = useSelector((store) => store.app);
    const dispatch = useDispatch();

    const fetchingYoutubeVideo = useCallback(async () => {
        try {
            const res = await axios.get(`${YOUTUBE_VIDEOS_API}`);
            dispatch(setHomeVideo(res?.data?.items))
        } catch (error) {
            console.log(error);
        }
    }, [dispatch]);

    const fetchVideoByCategory = useCallback(async (category) => {
        try {
            const res = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${category}&type=video&key=${API_KEY}`);
            dispatch(setHomeVideo(res?.data?.items))
            console.log(res)
        } catch (error) {
            console.log(error);
        }
    }, [dispatch]);

    useEffect(() => {
        if (category === "All") {
            fetchingYoutubeVideo();
        } else {
            fetchVideoByCategory(category);
        }
    }, [category, fetchingYoutubeVideo, fetchVideoByCategory]);

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
