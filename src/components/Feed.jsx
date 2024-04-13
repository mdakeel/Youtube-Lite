import React from 'react'

export const Feed = () => {
  const buttonList = ["ALL", "JavaScript", "Java", "Live", "Music", "Songs", "Trending", "Programming", "Data Type", "AI", "Know Your Creator" ]

  return (
    <div className='  w-full '>
      {
      buttonList.map((buttonName, index) => {
        return <button key={index} className=' bg-gray-100 font-sans mx-2 px-4 py-1 my-2 text-[14px]  font-medium first:bg-black first:text-[#fff] rounded-md hover:first:bg-black hover:bg-gray-200 '>{buttonName}</button>
      })
    }
    </div>
  )
}
