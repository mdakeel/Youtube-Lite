import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategory, setSearchSuggestion } from "../utils/appSlice";
import { useState } from "react";
import { SEARCH_SUGGESTIONS_API } from "../Constant/YouTube";
import axios from "axios";

// images
import logo from "../assets/logo.png";
import profile from "../assets/profile-img.png";

// react icons
import { AiOutlineMenu } from "react-icons/ai";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiVideoOn } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { MdKeyboardVoice } from "react-icons/md";

export const Navbar = () => {
  const [input, setInput] = useState("");
  const [suggestion, setSuggestion] = useState(false);
  const dispatch = useDispatch();
  const { searchSuggestion } = useSelector((store) => store.app);

  const searchVideo = () => {
    dispatch(setCategory(input));
    setInput("");
  };

  const showSuggestion = async () => {
    try {
      const res = await axios.get(SEARCH_SUGGESTIONS_API + input);
      dispatch(setSearchSuggestion(res?.data[1]));
    } catch (error) {
      console.log(error);
    }
  };

  const openSuggestion = () => {
    setSuggestion(true);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      showSuggestion();
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [input, showSuggestion]);
  return (
    <div className="w-full fixed top-0 z-10 ">
      <div className="flex justify-between pl-[16px] w-full md:pr-[25px]  z-10 bg-white ">
        <div className="flex items-center space-x-2 cursor-pointer">
          <div className="hover:bg-gray-200 p-2 rounded-full ">
            <AiOutlineMenu size={"22px"} />
          </div>

          <img src={logo} width={"115px"} alt="" className="px-3 md:flex hidden" />
        </div>
        <div className="flex items-center md:w-[44%] w-auto m-2 space-x-4 cursor-pointer">
          <div className="flex w-full ">
            <input 
              type="search"
              value={input}
              onFocus={openSuggestion}
              onChange={(e) => setInput(e.target.value)}
              className="w-full px-4 border  md:py-[8px] py-0 border-gray-300 outline-none rounded-l-full "
              placeholder="Search "
              required
            />
            <button
              onClick={searchVideo}
              className=" px-4 py-[8px] border border-gray-300 rounded-r-full bg-gray-50 hover:bg-gray-100 cursor-pointer"
            >
              <CiSearch size={"24px"} className="text-gray-600 " />
            </button>
          </div>

          {suggestion && searchSuggestion.length !== 0 && (
            <div className="absolute top-1 z-50 w-auto py-5 bg-white shadow-lg mt-12 rounded-lg border border-gray-200">
              <ul>
                {searchSuggestion.map((text, idx) => {
                  return (
                    <div className="flex items-center px-4 hover:bg-gray-100">
                      <CiSearch size="20px" />
                      <li className="px-2 py-1 cursor-pointer text-md font-medium">
                        {text}
                      </li>
                    </div>
                  );
                })}
              </ul>
            </div>
          )}

          <div className="bg-gray-100 p-[10px] rounded-full md:flex hidden hover:bg-gray-200 ">
            <MdKeyboardVoice size={"20px"} className="text-gray-900 " />
          </div>
        </div>

{/* <div className="w-full"> */}
        <div className="flex justify-between items-center md:w-[12%] w-[10%]">
          <div className="cursor-pointer md:flex hidden hover:bg-gray-100 rounded-full p-[8px] ">
            <CiVideoOn size={"24px"} />
          </div>

          <div className="cursor-pointer md:flex hidden hover:bg-gray-100 rounded-full p-[8px] ">
            <IoIosNotificationsOutline size={"24px"} />
          </div>
          <img
            src={profile}
            alt=""
            className="rounded-full w-8 h-8 cursor-pointer"
          />
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};
