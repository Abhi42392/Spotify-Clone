import albumModel from "../models/albumModel.js";
import {v2 as cloudinary} from 'cloudinary';
const addAlbum=async(req,res)=>{
    try{
        const name=req.body.name;
        const desc=req.body.desc;
        const bgColor=req.body.bgcolor;
        const imageFile=req.files.image[0];
        const imageUpload=await cloudinary.uploader.upload(imageFile.path,{resource_type:"image"});
        const albumData={
            name,
            desc,
            bgColor,
            image:imageUpload.secure_url
        }
        const album=albumModel(albumData);
        await album.save();
        res.json({success:true,message:"Album added"});
    }catch(err){
        console.log(err);
        res.json({success:false});
    }
}

const listAlbum=async(req,res)=>{
    try{
        const allAlbums=await albumModel.find({});
        res.json({success:true,message:allAlbums});
    }catch(e){
        res.json({success:false});
    }
}

const removeAlbum=async(req,res)=>{
    try{
        await albumModel.findByIdAndDelete(req.body.id);
        res.json({success:true,message:"Album deleted"})
    }catch(e){
        res.json({success:false});
    }
}

export {addAlbum,removeAlbum,listAlbum};