import React from 'react'
import {assets} from "../assets/frontend-assets/assets";
import {useNavigate} from "react-router-dom"
const SideBar = () => {
    const navigate=useNavigate();
  return (
    <div className='hidden lg:block w-1/4 h-[81%]'>
        <div className='w-full  bg-[#121212]  m-2 space-y-6 py-4 rounded-sm lg:flex-col'>
            <div className='flex space-x-5 items-center ml-10'>
                <img src={assets.home_icon} alt="home" className='h-8  cursor-pointer' onClick={()=>{navigate("/")}} />
                <p className='font-bold text-white text-xl'>Home</p>
            </div>
            <div className='flex space-x-5 items-center ml-10'>
                <img src={assets.search_icon} alt="" className='h-8 cursor-pointer' />
                <p className='font-bold text-white text-xl'>Search</p>
            </div>
        </div>
        <div className='w-full h-full bg-[#121212]  m-2 py-4 px-3 rounded-sm'>
            <div className='flex justify-between'>
                <div className='flex items-center space-x-3'>
                    <img src={assets.stack_icon} alt="playlist" className='h-10' />
                    <p className='text-white font-semibold'>Your Library</p>
                </div>
                <div className='absoulte right-0 flex items-center space-x-2'>
                    <img src={assets.arrow_icon} alt="right arrow" className='h-5 cursor-pointer'/>
                    <img src={assets.plus_icon} alt="add" className='h-5 cursor-pointer' /> 
                </div>
            </div>
            <div className='my-4 p-3 bg-[#242424] rounded-md'>
                <p className='font-bold text-white'>Create your first playlist</p>
                <p className='text-white font-thin  mb-4'>it's easy we will help you</p>
                <button className='rounded-2xl bg-white py-1 px-3'>Create Playlist</button>
            </div>
            <div className='my-4 p-3 bg-[#242424] rounded-md'>
                <p className='font-bold text-white'>Let's find some podcasts to follow</p>
                <p className='text-white font-thin  mb-4'>we'll keep you update on new episodes</p>
                <button className='rounded-2xl bg-white py-1 px-3'>Browse Podcasts</button>
            </div>
        </div>

    </div>
  )
}

export default SideBar;