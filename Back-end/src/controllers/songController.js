import songModel from "../models/songModel.js";
import {v2 as cloudinary} from 'cloudinary';
const addSong= async(req,res)=>{
    try{
        const name=req.body.name;
        const desc=req.body.desc;
        const album=req.body.album;
        const imageFile=req.files.image[0];
        const audioFile=req.files.audio[0];
        const imageUpload=await cloudinary.uploader.upload(imageFile.path,{resource_type:"image"});
        const audioUpload=await cloudinary.uploader.upload(audioFile.path,{resource_type:"video"});
        const duration=`${Math.floor(audioUpload.duration/60)}:${Math.floor(audioUpload.duration%60)}`;

        const songData={
            name,
            desc,
            album,
            image:imageUpload.secure_url,
            file:audioUpload.secure_url,
            duration
        }
        const song=songModel(songData);
        await song.save();

        res.json({success:true,message:"Song added"});

    }catch(err){
        res.json({success:false});
    }
}
const listSong= async(req,res)=>{
    try{
        const allsongs=await songModel.find({});
        res.json({success:true,message:allsongs});
    }catch(e){
        res.json({success:false});
    }
}
const removeSong=async (req,res)=>{
    try{
        console.log(req.body);
        await songModel.findByIdAndDelete(req.body.id);
        res.json({success:true,message:"Song deleted"});
    }catch(e){
        res.json({success:false});
    }
}



export {addSong,listSong,removeSong}