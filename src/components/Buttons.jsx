import React from 'react'


export const Buttons = () => {

  const buttonList = ["ALL", "JavaScript", "Java", "Live", "Music", "Songs", "Trending", "Programming", "Data Type", "AI", "Know Your Creator" ]

  return (
    <div className='w-full mt-[55px] fixed bg-white  px-2'>
      {
      buttonList.map((buttonName, index) => {
        return <button key={index} className=' bg-gray-100 font-sans mx-2 px-4 py-[6px] my-3 text-[14px]  font-medium first:bg-black first:text-[#fff] rounded-md hover:first:bg-black hover:bg-gray-200 '>{buttonName}</button>
      })
    }
    </div>
  )
}
