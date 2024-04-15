import React from 'react'
import { Sidebar } from './Sidebar'
import { Feed } from './Feed'
import { Buttons } from './Buttons'

export const Home = () => {
  return (
    <>
    <div className=''>
    <Sidebar />
    <div className='flex flex-col lg:w-[84%] lg:ml-[16%]'>
    <Buttons />
    <Feed />
    </div>
    </div>
    </>
  )
}
