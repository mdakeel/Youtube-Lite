import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import API_KEY from "../Constant/YouTube";
import azra from "../assets/azra.png";

// react icons
import { SlLike } from "react-icons/sl";
import { SlDislike } from "react-icons/sl";
import { PiShareFatLight } from "react-icons/pi";
import { LiaDownloadSolid } from "react-icons/lia";
import { FiMoreHorizontal } from "react-icons/fi";
import { BsThreeDotsVertical } from "react-icons/bs";


export const Watch = () => {
  const [singlevideo, setSingleVideo] = useState("");
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");

  const getSingleVideo = async () => {
    try {
      const res = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
      );
      
      setSingleVideo(res?.data?.items[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleVideo();
  }, []);

  console.log(singlevideo)

  return (
    <div className="flex text-2xl text-black mt-[80px] px-[77px]">
      <div>
        <iframe
          width="930"
          height="500"
          src={`https://www.youtube.com/embed/${videoId}?&autoplay=1`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="rounded-xl"
        ></iframe>
        <h1 className="font-bold mt-3  text-lg">
          {singlevideo?.snippet?.title}
        </h1>
        <div className="flex justify-between items-center mt-2">
          <div className="flex justify-between items-center  w-[33%]">
            <div className="flex items-center  space-x-3 cursor-pointer ">
              <img src={azra} alt="" className="w-10 h-10 rounded-full" />
              <div className="flex flex-col grid   ">
                <h2 className="font-semibold    text-[15px]">{singlevideo?.snippet?.channelTitle}</h2>
                <div className="flex items-center -mt-[11px] text-[13px] space-x-2">
                  <p>2.9L</p>
                  <p>subscribers</p>
                </div>
              </div>
            </div>
            <div className="text-[17px] px-6 py-[3px]  cursor-pointer font-medium bg-black rounded-full text-white">
              Subscribe
            </div>
          </div>
          <div className="flex justify-between w-[45%] ">
            <div className="flex items-center text-[16px] px-4 space-x-2 py-[3px] bg-gray-100 hover:bg-gray-200 rounded-full  cursor-pointer font-medium"><SlLike size={"20"}  /> <span className="border border-gray-300 h-full"></span><SlDislike size={"20"}/></div>
            <div className="flex items-center text-[16px] px-4 space-x-2 py-[3px] bg-gray-100 hover:bg-gray-200 rounded-full  cursor-pointer font-medium"><PiShareFatLight size={"22"} /><p>Share</p></div>
            <div className="flex items-center text-[16px] px-4 space-x-2 py-[3px] bg-gray-100 hover:bg-gray-200 rounded-full  cursor-pointer font-medium"><LiaDownloadSolid size={"22"} /> <p>Download</p></div>
            <div className="flex items-center text-[16px] px-4 space-x-2 py-[3px] bg-gray-100 hover:bg-gray-200 rounded-full  cursor-pointer font-medium"><FiMoreHorizontal size={"22"}/></div>
          </div>
        </div>
      </div>
      <div className="w-[100%] border border-gray-300 ml-2 rounded-lg h-fit">
        <div className="flex justify-between items-center">
            <h1>Top Chat</h1>
            <BsThreeDotsVertical />
        </div>
        <div className="overflow-y-autto h-[29rem]">
            Chats
        </div>
      </div>
    </div>
  );
};
