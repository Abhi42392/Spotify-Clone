import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {url} from '../App'
import { toast } from 'react-toastify'

const ListAlbum = () => {
  const[albumsData,setAlbumsData]=useState([])
  useEffect(()=>{
      fetchAlbums();
  },[])

  const fetchAlbums=async()=>{
    const response=await axios.get(`${url}/api/album/list`);
    setAlbumsData(response.data.message);
    console.log(response.data.message);
    
  }

  const handleDelete=async(id)=>{
    try{
      const response=await axios.post(`${url}/api/album/remove`,{id});
      
      if(response.data.success){
        toast.success("Album Deleted");
        fetchAlbums();
      }else{
        throw new Error("Something went wrong");
      }
    }catch(err){
      toast.error(err.message||"Error Occured");
    }
  }
  return (
    <>
      
        <div className='bg-gray-200 border border-black grid grid-cols-3 sm:grid-cols-5 text-xs px-2 sm:text-sm sm:px-5 py-2.5 mr-2 sm:mr-9 font-medium'>
          <p className='hidden sm:block'>Image</p>
          <p>Name</p>
          <p className='m-auto'>Description</p>
          <p className='m-auto hidden sm:block'>Bg-Colour</p>
          <p className='m-auto'>Action</p>
        </div>
        <div className='mr-2 sm:mr-9'>
          {albumsData.map((album)=>(
            <div className='border border-b-black border-l-black border-r-black text-xs px-2 sm:text-sm sm:px-5 py-2.5 text-center grid grid-cols-3 sm:grid-cols-5 items-center'>
              <img src={album.image} alt="" className='w-[min(5vw,50px)] hidden sm:block'/>
              <p>{album.name}</p>
              <p className='m-auto'>{album.desc}</p>
              <p className='m-auto h-4 w-10 hidden sm:block' style={{backgroundColor:album.bgColor}}></p>
              <p className='m-auto cursor-pointer' onClick={()=>{handleDelete(album._id)}}></p>
            </div>
          ),)}
        </div>

    </>
  )
}

export default ListAlbum;