import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import axios from 'axios';
import {url} from '../App'
import { toast } from 'react-toastify';
const AddSong = () => {
  const[song,setSong]=useState(false);
  const[image,setImage]=useState(false);
  const[name,setName]=useState();
  const[desc,setDesc]=useState();
  const[album,setAlbum]=useState("none");
  const[loading,setLoading]=useState(false);
  const[albumData,setAlbumData]=useState([]);

  const handleSubmit=async(e)=>{
    e.preventDefault();
    setLoading(true);
    try{
      const formData=new FormData();
      formData.append('name',name);
      formData.append('desc',desc);
      formData.append('album',album);
      formData.append('image',image);
      formData.append('audio',song);

      const response=await axios.post(`${url}/api/song/add`,formData);

      if(response.data.success){
        toast.success("Song Added");
        setName("");
        setDesc("");
        setAlbum("none");
        setImage(false);
        setSong(false);
      }else{
        throw new Error("Something went wrong")
      }
    }catch(err){
      toast.error(err.message||"Error occured")
    }
    setLoading(false);
    
  }
  useEffect(()=>{
    const fetchData=async ()=>{
      try{
        const response=await axios.get(`${url}/api/album/list`);
        const allAlbums=response.data.message;
        const allAlbumsNames=allAlbums.map((item)=>item.name);
        setAlbumData(allAlbumsNames);
      }catch(e){
        console.log(e);
      }
    };
    fetchData();
    
  },[])

  return loading?
  (
    <div className='grid place-items-center min-h-[80vh]'>
      <div className='w-16 h-16 place-self-center border-4 border-gray-400 border-t-green-800 rounded-full animate-spin'>
         
      </div>
    </div>
  )
  : (
    <>
      <form onSubmit={handleSubmit}>
        <div className='flex flex-col gap-7 sm:flex-row'>

          <div className='flex flex-col gap-3'>
            <p>Upload song</p>
            <label  htmlFor="song"><img src={song?assets.upload_added:assets.upload_song} alt="upload song" className='w-[max(8vw,100px)] cursor-pointer'/></label>
            <input type="file" id="song"  hidden accept='audio/*' onChange={(e)=>{setSong(e.target.files[0])}}/>
          </div>

          <div className='flex flex-col gap-3'>
            <p>Upload Image</p>
            <label htmlFor="image"><img src={image?URL.createObjectURL(image):assets.upload_area} alt="upload image" className='w-[max(8vw,100px)] cursor-pointer' /></label>
            <input type="file" id="image" hidden accept='image/*'  onChange={(e)=>{setImage(e.target.files[0])}}/>
          </div>
        </div>

        <div className='mt-8 flex flex-col gap-3 text-gray-600'>
          <label htmlFor="name">
            Song name
          </label>
          <input type="text" id="name" onChange={(e)=>{setName(e.target.value)}} value={name} className='bg-[#F3FFF7] border border-gray-400 mr-5 w-[min(60vw,500px)] p-2 outline-green-600' placeholder='Type here'/>
        </div>

        <div className='mt-8 flex flex-col gap-3 text-gray-600'>
          <label htmlFor="desc">
            Song description
          </label>
          <input type="text" id="desc" onChange={(e)=>{setDesc(e.target.value)}} value={desc} className='bg-[#F3FFF7] border border-gray-400 mr-5 w-[min(60vw,500px)] p-2  outline-green-600' placeholder='Type here'/>
        </div>

        <div className='mt-8 flex flex-col gap-3 text-gray-600'>
            <label htmlFor="album">Album</label>
            <select  id="album" onChange={(e)=>{setAlbum(e.target.value)}}  defaultValue={album} className='w-fit bg-transparent outline-green-600 border border-gray-400 p-2'>
              <option value="none">None</option> 
              {albumData.map((item)=>(
                <option value={item}>{item}</option>
              ))}
            </select>
        </div>

        <button type="submit" className='mt-8 bg-black py-2 px-4 text-white w-[80px]  sm:w-[120px]'>
          ADD
        </button>
      </form>
    </>
  )
}

export default AddSong