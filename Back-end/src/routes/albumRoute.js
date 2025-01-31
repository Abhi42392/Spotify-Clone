import { addAlbum,removeAlbum,listAlbum } from "../controllers/albumController.js";
import express from 'express';
import upload from "../middleware/multer.js";

const albumRoute=express.Router();

albumRoute.get('/list',listAlbum);
albumRoute.post('/add',upload.fields([{name:'image',maxCount:1}]),addAlbum);
albumRoute.post('/remove',removeAlbum);

export default albumRoute;