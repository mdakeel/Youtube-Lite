import React from 'react'
import { Sidebar } from './Sidebar'
import { Feed } from './Feed'
import { Buttons } from './Buttons'

export const Home = () => {
  return (
    <>
    <div className='flex '>
    <Sidebar />
    <div className='flex flex-col'>
    <Buttons />
    <Feed />
    </div>
    </div>
    </>
  )
}
