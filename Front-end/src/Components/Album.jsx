import React from 'react'
import { useNavigate } from 'react-router-dom'
export const Album = (props) => {
  const navigate=useNavigate();

  
  function handleNavigate(){
    	navigate(`/albums/${props.id}`);
  }
  return (
    <div className='min-w-[180px] py-2 px-3 cursor-pointer hover:bg-[#ffffff26]' onClick={handleNavigate}>
        <img src={props.image} alt="album" className='rounded' />
        <h1 className='font-bold text-lg mt-2 mb-1 text-white'>{props.name}</h1>
        <p className='text-slate-200 text-sm'>{props.desc}</p>
    </div>
  )
}
