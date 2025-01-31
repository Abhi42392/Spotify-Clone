import React, { useState } from 'react'
import { assets } from '../assets/assets'
import axios from 'axios';
import {url} from '../App'
import { toast } from 'react-toastify';

const AddAlbum = () => {
  const[image,setImage]=useState(false);
  const[name,setName]=useState();
  const[desc,setDesc]=useState();
  const[loading,setLoading]=useState(false);
  const[bgColor,setBgColor]=useState();

  const handleSubmit=async(e)=>{
    e.preventDefault();
    setLoading(true);
    try{
      const formData=new FormData();
      formData.append('name',name);
      formData.append('desc',desc);
      formData.append('bgcolor',bgColor);
      formData.append('image',image);
      console.log(name,desc,bgColor);
      
      const response=await axios.post(`${url}/api/album/add`,formData);

      if(response.data.success){
        toast.success("Album Added");
        setName("");
        setDesc("");
        setImage(false);
        setBgColor("");
      }else{
        throw new Error("Something went wrong")
      }
    }catch(err){
      toast.error(err.message||"Error occured")
    }
    setLoading(false);
    
  }

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
            <p>Upload Image</p>
            <label htmlFor="image"><img src={image?URL.createObjectURL(image):assets.upload_area} alt="upload image" className='w-[max(8vw,100px)] cursor-pointer' /></label>
            <input type="file" id="image" hidden accept='image/*'  onChange={(e)=>{setImage(e.target.files[0])}}/>
          </div>
        </div>

        <div className='mt-8 flex flex-col gap-3 text-gray-600'>
          <label htmlFor="name">
            Album name
          </label>
          <input type="text" id="name" onChange={(e)=>{setName(e.target.value)}} value={name} className='bg-[#F3FFF7] border border-gray-400 mr-5 w-[min(60vw,500px)] p-2 outline-green-600' placeholder='Type here'/>
        </div>

        <div className='mt-8 flex flex-col gap-3 text-gray-600'>
          <label htmlFor="desc">
            Album description
          </label>
          <input type="text" id="desc" onChange={(e)=>{setDesc(e.target.value)}} value={desc} className='bg-[#F3FFF7] border border-gray-400 mr-5 w-[min(60vw,500px)] p-2  outline-green-600' placeholder='Type here'/>
        </div>
        <div className='mt-8 flex flex-col gap-3 text-gray-600'>
          <label htmlFor="bgcolor">
            Bg Color
          </label>
          <input type="color" onChange={(e)=>{setBgColor(e.target.value)}} value={bgColor}/>
        </div>
        <button type="submit" className='mt-8 bg-black py-2 px-4 text-white w-[80px]  sm:w-[120px]'>
          ADD
        </button>
      </form>
    </>
  )
}

export default AddAlbum;