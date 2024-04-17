import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
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
import { BiMenuAltLeft } from "react-icons/bi";
import { Comment } from "./Comment";
import { WatchFeed } from "./WatchFeed";
import API_KEY from "../Constant/YouTube";

export const Watch = () => {
  const [singlevideo, setSingleVideo] = useState("");
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");

  // hide and chat start
  const [isChatHidden, setIsChatHidden] = useState(true);

  const chatVisibility = () => {
    setIsChatHidden(!isChatHidden);
  };

  // hide and chat end

  // hide and comment start
  const [isCommentHidden, setIsCommentHidden] = useState(true);

  const commentVisibility = () => {
    setIsCommentHidden(!isCommentHidden);
  };

  // hide and comment end

  const getSingleVideo = async () => {
    try {
      const res = await axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
      );
      console.log(res?.data?.items[0]);
      setSingleVideo(res?.data?.items[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleVideo();
  }, [getSingleVideo]);

  console.log(singlevideo);

  // for watch page videos 

  return (
    <div>
      <div className="flex xl:flex-row flex-col mb-[40px] text-2xl w-[100%] text-black mt-[80px] lg:px-[77px] md:px-[30px] px-[20px]">
        {/* left div */}
        <div className="w-full mr-4">
          <iframe
            width="930"
            height="500"
            src={`https://www.youtube.com/embed/${videoId}?&autoplay=1`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="rounded-xl w-full h-cover"
          ></iframe>
          <h1 className="font-bold mt-4 text-lg">
            {singlevideo?.snippet?.title}
          </h1>
          <div className="flex  items-center mt-2">
            <div className="flex  items-center  w-full">
              <div className="flex items-center  space-x-3 cursor-pointer ">
                <img
                  src={singlevideo?.snippet?.thumbnails?.high?.url}
                  alt=""
                  className="w-10 h-10 rounded-full"
                />
                <div className="flex flex-col   ">
                  <h2 className="font-semibold w-full  text-[15px]">
                    {singlevideo?.snippet?.channelTitle}
                  </h2>
                  <div className="flex items-center -mt-[12px] text-[13px] space-x-2">
                    <p>716K</p>
                    <p>subscribers</p>
                  </div>
                </div>
              </div>
              <div className="text-[17px] px-5 ml-4 py-[3px] md:flex hidden cursor-pointer font-medium bg-black rounded-full text-white">
                Subscribe
              </div>
            </div>
            <div className="flex justify-between w-full space-x-3 overflow-x-scroll no-scrollbar">
              <div className="flex items-center text-[16px] px-4 space-x-2 py-[3px] bg-gray-100 hover:bg-gray-200 rounded-full  cursor-pointer font-medium">
                <SlLike size={"20"} />{" "}
                <span>{singlevideo?.statistics?.likeCount}</span>
                <span className="border border-gray-300 h-full"></span>
                <SlDislike size={"20"} />
              </div>
              <div className="flex items-center text-[16px] px-4 space-x-2 py-[3px] bg-gray-100 hover:bg-gray-200 rounded-full  cursor-pointer font-medium">
                <PiShareFatLight size={"22"} />
                <p>Share</p>
              </div>
              <div className="flex items-center text-[16px] px-4 space-x-2 py-[3px] bg-gray-100 hover:bg-gray-200 rounded-full  cursor-pointer font-medium">
                <LiaDownloadSolid size={"22"} /> <p>Download</p>
              </div>
              <div className="flex items-center text-[16px] px-4 space-x-2 py-[3px] bg-gray-100 hover:bg-gray-200 rounded-full  cursor-pointer font-medium">
                <FiMoreHorizontal size={"22"} />
              </div>
            </div>
          </div>

          {/* comment-description section */}
          <div>
            <div className="bg-gray-100 pt-1 px-3  rounded-xl mt-4">
              <div
                className={
                  !isCommentHidden ? "hidden " : "h-14 overflow-y-hidden"
                }
              >
                <div>
                  <div className="flex text-center space-x-3">
                    <p className="text-[14px] font-semibold ">
                      <span>{singlevideo?.statistics?.viewCount} </span>view
                    </p>
                    <p className="text-[14px] font-semibold ">1 day ago</p>
                  </div>
                  <p className="text-[14px] font-normal">
                    {singlevideo?.snippet?.localized?.description}
                  </p>
                </div>
              </div>
              <button
                id="toggle-btn"
                onClick={commentVisibility}
                className={
                  !isCommentHidden ? "hidden " : "text-[14px] font-semibold"
                }
              >
                more
              </button>
              <div>
                <div
                  onClick={commentVisibility}
                  className={isCommentHidden ? "hidden" : "h-auto"}
                >
                  <div className="flex text-center space-x-3">
                    <p className="text-[14px] font-semibold ">
                      <span>{singlevideo?.statistics?.viewCount}</span>view
                    </p>
                    <p className="text-[14px] font-semibold ">1 day ago</p>
                  </div>
                  <p className="text-[14px] font-normal">
                    {singlevideo?.snippet?.localized?.description}
                  </p>

                  <button className="text-[14px] font-semibold">Hide</button>
                </div>
              </div>
            </div>
          </div>

          {/* Comments */}
          <div className="mt-4">
            <div className="flex justify-between ">
              <div className="flex items-center space-x-6">
                <div className="flex items-center">
                  <h1 className="text-[18px] font-semibold ">
                    <span>{singlevideo?.statistics?.commentCount}</span>{" "}
                    Comments
                  </h1>
                </div>
                <div className="flex items-center">
                  <BiMenuAltLeft size={"24"} />
                  <p className="text-[18px] font-medium ">Short by</p>
                </div>
              </div>
              {/* <PiDotsThreeVerticalBold size={"24"} /> */}
            </div>

            <div>
              <div className="flex items-center space-x-2 w-full mt-4">
                <img
                  src={singlevideo?.snippet?.thumbnails?.high?.url}
                  alt=""
                  className="w-10 h-10 rounded-full"
                />
                <div className="flex justify-between w-full border-b px-2 text-[14px] text-gray-900 border-gray-400">
                  <input
                    type="text"
                    name=""
                    id=""
                    className="outline-none w-full   "
                    placeholder="Add a comment..."
                  />
                  <CiFaceSmile size={"22"} />
                </div>
              </div>
              <div className="flex items-center w-auto space-x-2 mt-2 justify-end">
                <div className="bg-gray-100 w-auto text-[15px] rounded-full px-4 font-medium hover:bg-gray-200 cursor-pointer">
                  Cancel
                </div>
                <div className="bg-gray-100 w-auto text-[15px] rounded-full px-4 font-medium hover:bg-gray-200 cursor-pointer">
                  Comment
                </div>
              </div>
            </div>

            <div>
              <Comment />
            </div>
          </div>
        </div>

        {/* right side div */}
        <div className="md:w-[40%] w-full ">
        <div className=" w-auto border border-gray-300  rounded-xl h-fit ">
          
          <div className={!isChatHidden ? "hidden" : ""}>
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
            <div className="border-t border-gray-200 ">
              <div className="flex m-2 justify-between space-x-2 px-5">
                {/* <img src={azra} alt="" className="w-9 h-8 rounded-full "/> */}
                <div className="flex justify-between items-center bg-gray-100 px-4 w-full rounded-full">
                  <input
                    className="outline-none bg-none bg-transparent text-[14px] w-full "
                    type="text"
                    placeholder="Chat..."
                  />
                  <CiFaceSmile />
                </div>
                <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer p-2 rounded-full">
                  <HiOutlineCurrencyDollar size={"22"} />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div
              onClick={chatVisibility}
              className={!isChatHidden ? "hidden " : ""}
            >
              <div className="text-[15px] hover:bg-gray-100 py-1 font-semibold text-center border-t border-gray-200 cursor-pointer ">
                Hide chat
              </div>
            </div>
            <div
              onClick={chatVisibility}
              className={isChatHidden ? "hidden " : ""}
            >
              <div className=" text-[15px] hover:bg-gray-100 py-1 font-semibold text-center  border-gray-200 cursor-pointer ">
                Show chat
              </div>
            </div>
          </div>
          </div>
          
          {/* videos */}
          <div className="flex flex-col w-full">
            <WatchFeed />
          </div>
        </div>
      </div>
    </div>
  );
};
