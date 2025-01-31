import React from 'react'
import { assets } from '../assets/frontend-assets/assets'
import { useNavigate } from 'react-router-dom'
const NavBar = () => {
  const navigate=useNavigate();
  return (
      <div>
        <div className='w-full items-center font-semibold flex justify-between '>
            <div className='flex items-center gap-2'>
                <img src={assets.arrow_left} onClick={()=>navigate(-1)} alt="previous page" className=' w-8 bg-black rounded-2xl p-2 cursor-pointer' />
                <img src={assets.arrow_right} onClick={()=>navigate(1)} alt="next page" className=' w-8 bg-black rounded-2xl p-2 cursor-pointer'/>
            </div>
            <div className='flex gap-4 items-center'>
                <button className='bg-white px-4 py-1 rounded-2xl hidden md:block cursor-pointer text-black'>Explore Premium</button>
                <button className='bg-black px-3 py-1 rounded-3xl  cursor-pointer'>Install App</button>
                <p className='h-8 w-8 rounded-full bg-purple-600  text-lg flex items-center justify-center '>A</p>
            </div>
        </div>
        <div className='space-x-4 mt-2'>
          <button className=' text-black bg-white px-3 py-1 rounded-3xl'>All</button> 
          <button className='bg-black  px-3 py-1 rounded-3xl '>Music</button>
          <button className='bg-black  px-3 py-1 rounded-3xl'>Podcasts</button>
        </div>
      </div>
  ) 
}

export default NavBar;  