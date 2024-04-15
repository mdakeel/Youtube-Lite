import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import API_KEY from "../Constant/YouTube";
import azra from '../assets/azra.png'


import { IoIosNotificationsOutline } from "react-icons/io";

export const Watch = () => {

    const [singlevideo, setSingleVideo] = useState("");
    const [searchParams] = useSearchParams();
    const videoId = searchParams.get('v');
    
    const getSingleVideo = async () => {
        try {
            const res = await axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`);
            setSingleVideo(res?.data?.items[0])
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getSingleVideo();
    }, []);

  return (
    <div className="text-2xl text-black mt-[80px] px-[77px]">
     <div>
     <iframe
        width="930"
        height="500"
        src={`https://www.youtube.com/embed/${videoId}?si=78cHOX-u2wTA-jMx`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="rounded-xl"
      ></iframe>
      <h1 className="font-bold mt-3  text-lg">{singlevideo?.snippet?.title}</h1>
      <div className="flex justify-between items-center mt-2">
        <div className="flex justify-between items-center  w-[21%]">
            <div className="flex items-center  space-x-4 cursor-pointer ">
                <img src={azra} alt="" className="w-10 h-10 rounded-full" />
                <div className="flex flex-col grid mt-1  ">
                    <h2 className="font-semibold    text-[15px]">Phannel name</h2>
                    <div className="flex items-center -mt-[10px] text-[13px] space-x-2"><p>2.9L</p><p>subscribers</p></div>
                </div>
            </div>
                <div className="text-[17px] px-4 py-1 mt-1 cursor-pointer font-medium bg-black rounded-full text-white">Subscribe</div>

            {/* <div className="flex items-center px-4 py-1 font-medium bg-gray-100 hover:bg-gray-200 rounded-full">
                <IoIosNotificationsOutline size={"22"} />
                <div className="text-[17px]">Subscribe</div>
            </div> */}
            
        </div>
        <div>
            <div></div>
            <div></div>
            <div></div>
        </div>
      </div>
     </div>
     <div></div>
    </div>
  );
};
