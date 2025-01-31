import express from "express";
import cors from "cors";
import songRoute from "./src/routes/songRoute.js";
import albumRoute from "./src/routes/albumRoute.js";
import connectDB from "./src/config/mongodb.js";
import connectCloudinary from "./src/config/cloudinary.js";
import dotenv from "dotenv";
dotenv.config();

const app=express();
const port=process.env.PORT;

connectDB();
connectCloudinary();


app.use(express.json())
app.use(cors())

app.get('/',(req,res)=>{
    
    res.send("API is working");
});



app.use("/api/song/",songRoute);
app.use("/api/album/",albumRoute);

app.listen(port,()=>{
    console.log(`Server listening on ${port}`);
})