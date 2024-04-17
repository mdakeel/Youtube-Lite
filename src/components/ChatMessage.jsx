import React from "react";
import azra from "../assets/azra.png";
import profile from "../assets/profile-img.png"


export const ChatMessage = () => {

  
  return (
    
    <>
    <div className="flex w-full   space-x-3 py-1">
        <img src={azra} alt="" className="rounded-full w-7 h-7" />
      <div className="flex items-center">
        <p className="  text-sm ">
          <span className="text-sm font-semibold pr-2 ">Azra Naaz</span>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
        </p>
      </div>
    </div>

    <div className="flex w-full   space-x-3 py-1">
        <img src={profile} alt="" className="rounded-full w-6 h-6" />
      
      <div className="flex items-center">
        <p className="  text-sm ">
          <span className="text-sm font-semibold pr-2 ">Aakil Tayyab</span>
          Lorem ipsum dolor sit amet, 
        </p>
      </div>
    </div>

    </>
  );
};
