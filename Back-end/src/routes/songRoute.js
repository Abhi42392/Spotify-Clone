import { addSong,listSong, removeSong} from "../controllers/songController.js";
import express from "express";
import upload from "../middleware/multer.js";


const songRoute=express.Router();

songRoute.get('/list',listSong);
songRoute.post('/add',upload.fields([{name:'audio',maxCount:1},{name:'image',maxCount:1}]),addSong);
songRoute.post('/remove',removeSong);

export default songRoute;