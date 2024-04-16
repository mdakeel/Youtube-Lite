import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import API_KEY from "../Constant/YouTube";

// react icons
import { SlLike } from "react-icons/sl";
import { SlDislike } from "react-icons/sl";
import { PiShareFatLight } from "react-icons/pi";
import { LiaDownloadSolid } from "react-icons/lia";
import { FiMoreHorizontal } from "react-icons/fi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BsChevronDown } from "react-icons/bs";
import { CiFaceSmile } from "react-icons/ci";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import { LiveChat } from "./LiveChat";

export const Watch = ({item}) => {
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
    <div className="flex text-2xl w-[100%] text-black mt-[80px] px-[77px]">
      {/* left div */}
      <div className="">
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
        <h1 className="font-bold mt-4 text-lg">
          {singlevideo?.snippet?.title}
        </h1>
        <div className="flex justify-between items-center mt-2">
          <div className="flex justify-between items-center  w-[33%]">
            <div className="flex items-center  space-x-3 cursor-pointer ">
              <img src={singlevideo?.snippet?.thumbnails?.high?.url} alt="" className="w-10 h-10 rounded-full" />
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

      {/* right side div */}
      <div className="w-[100%] border border-gray-300 ml-4 rounded-xl h-fit ">
        {/* top */}
        <div className="flex justify-between items-center border-b border-gray-200 px-6 py-2 ">
          <div className="flex items-center space-x-1">
          <h1 className="text-[15px] font-medium">Top Chat</h1>
          <BsChevronDown size={"19"} />
          </div>
            <BsThreeDotsVertical size={"20"} />
        </div>

        {/* chat */}
        <div className="overflow-y-auto h-[28rem] py-2 px-6">
            <LiveChat />
        </div>

        {/* bottom */}
        <div className="border-t border-gray-200">
          <div className="flex m-2 justify-between space-x-2 px-5">
            {/* <img src={azra} alt="" className="w-9 h-8 rounded-full "/> */}
            <div className="flex justify-between items-center bg-gray-100 px-4 w-full rounded-full">
            <input className="outline-none bg-none bg-transparent text-[14px] w-full " type="text" placeholder="Chat..." />
            <CiFaceSmile />
            </div>
            <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer p-2 rounded-full"><HiOutlineCurrencyDollar size={"22"}/></div>
          </div>
          <div className="text-[15px] hover:bg-gray-100 py-1 font-semibold text-center border-t border-gray-200 cursor-pointer">Hide chat</div>
        </div>
      </div>
    </div>
  );
};
