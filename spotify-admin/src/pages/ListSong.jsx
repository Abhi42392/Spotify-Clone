import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {url} from '../App'
import { toast } from 'react-toastify'
const ListSong = () => {
  const[songsData,setSongsData]=useState([])
  useEffect(()=>{
      fetchSongs();
  },[])

  const fetchSongs=async()=>{
    const response=await axios.get(`${url}/api/song/list`);
    setSongsData(response.data.message);
  }

  const handleDelete=async(id)=>{
    try{
      const response=await axios.post(`${url}/api/song/remove`,{id});
      
      if(response.data.success){
        toast.success("Song Deleted");
        fetchSongs();
      }else{
        throw new Error("Something went wrong");
      }
    }catch(err){
      toast.error(err.message||"Error Occured");
    }
  }
  return (
    <>
        <div className='bg-gray-200 border border-black grid grid-cols-5 text-xs px-2 sm:text-sm sm:px-5 py-2.5 mr-2 sm:mr-9 font-medium'>
          <p>Image</p>
          <p>Name</p>
          <p className='m-auto'>Album</p>
          <p className='m-auto'>Duration</p>
          <p className='m-auto'>Action</p>
        </div>
        <div className='mr-2 sm:mr-9'>
          {songsData.map((song)=>(
            <div className='border border-b-black border-l-black border-r-black text-xs px-2 sm:text-sm sm:px-5 py-2.5  grid grid-cols-5 items-center'>
              <img src={song.image} alt="" className='w-[min(5vw,50px)]'/>
              <p>{song.name}</p>
              <p className='m-auto'>{song.album}</p>
              <p className='m-auto'>{song.duration}</p>
              <p className='m-auto cursor-pointer' onClick={()=>{handleDelete(song._id)}}>x</p>
            </div>
          ),)}
        </div>

    </>
  )
}

export default ListSong;