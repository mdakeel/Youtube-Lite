import React from "react";
import azra from "../assets/azra.png";
import profile from "../assets/profile-img.png";

import { SlLike } from "react-icons/sl";
import { SlDislike } from "react-icons/sl";

export const Comment = () => {
  return (
    <>
    <div className="flex w-full mt-4  space-x-3 py-1">
        <img src="https://deep-image.ai/_next/static/media/app-info-generator.bf08e63e.webp" alt="" className="rounded-full w-10 h-10" />

        <div className="">
          <div className="  text-[14px] font-medium ">
            <span>@</span>
            <span>ridawaseem</span>
          </div>
          <p className="text-[14px] font-medium">Lorem ipsum dolor sit amet, consectetur adipisicing elit. consectetur adipisicing elit.
          orem ipsum dolor sit amet,</p>
          <div className="flex items-center space-x-4">
            <SlLike size={"22"}/>
            <SlDislike size={"22"} />
            <p className="text-[14px] font-medium">Reply</p>
          </div>

        </div>
      </div>

<div className="flex w-full mt-4  space-x-3 py-1">
        <img src="https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/enhancer/3.jpg" alt="" className="rounded-full w-10 h-10" />

        <div className="">
          <div className="  text-[14px] font-medium ">
            <span>@</span>
            <span>khusnuma</span>
          </div>
          <p className="text-[14px] font-medium">Lorem ipsum dolor sit amet, consectetur adipisicing elit. consectetur adipisicing elit.
         </p>
          <div className="flex items-center space-x-4">
            <SlLike size={"22"}/>
            <SlDislike size={"22"} />
            <p className="text-[14px] font-medium">Reply</p>
          </div>

        </div>
      </div>

      <div className="flex w-full mt-4  space-x-3 py-1">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3Fs5ooIRDS6jPia3foUrPU0n6uT5xcCYf-KMH-iOKNg&s"alt="" className="rounded-full w-10 h-10" />

        <div className="">
          <div className="  text-[14px] font-medium ">
            <span>@</span>
            <span>dogyboy</span>
          </div>
          <p className="text-[14px] font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae distinctio accusamus laboriosam quisquam, nihil modi voluptas sed, perferendis ullam blanditiis, perspiciatis dignissimos amet consequatur praesentium inventore pariatur odio nobis quaerat.</p>
          <div className="flex items-center space-x-4">
            <SlLike size={"22"}/>
            <SlDislike size={"22"} />
            <p className="text-[14px] font-medium">Reply</p>
          </div>

        </div>
      </div>

      <div className="flex w-full mt-4  space-x-3 py-1">
        <img src={azra} alt="" className="rounded-full w-10 h-10" />

        <div className="">
          <div className="  text-[14px] font-medium ">
            <span>@</span>
            <span>azranaaz</span>
          </div>
          <p className="text-[14px] font-medium">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <div className="flex items-center space-x-4">
            <SlLike size={"22"}/>
            <SlDislike size={"22"} />
            <p className="text-[14px] font-medium">Reply</p>
          </div>

        </div>
      </div>

      <div className="flex w-full mt-4  space-x-3 py-1">
        <img src={profile} alt="" className="rounded-full w-10 h-10" />

        <div className="">
          <div className="  text-[14px] font-medium ">
            <span>@</span>
            <span>aakiltayyab</span>
          </div>
          <p className="text-[14px] font-medium">Lorem ipsum dolor sit amet, consectetur adipisicing elit. consectetur adipisicing elit.</p>
          <div className="flex items-center space-x-4">
            <SlLike size={"22"}/>
            <SlDislike size={"22"} />
            <p className="text-[14px] font-medium">Reply</p>
          </div>

        </div>
      </div>

      <div className="flex w-full mt-4  space-x-3 py-1">
        <img src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" alt="" className="rounded-full w-10 h-10" />

        <div className="">
          <div className="  text-[14px] font-medium ">
            <span>@</span>
            <span>chacha</span>
          </div>
          <p className="text-[14px] font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque laborum minima similique ratione cumque maxime quae, animi quam accusantium, nisi beatae fugit, porro impedit dignissimos ipsa. Consectetur ex cum porro?</p>
          <div className="flex items-center space-x-4">
            <SlLike size={"22"}/>
            <SlDislike size={"22"} />
            <p className="text-[14px] font-medium">Reply</p>
          </div>

        </div>
      </div>




      
    </>
  );
};
