import { createContext,useState,useRef, useEffect } from "react";
import axios from 'axios'
export const PlayerContext=createContext(null);

export default function PlayerState({children}){
    const audioRef=useRef();
    const seekBg=useRef();
    const seekBar=useRef();
    const url="https://spotify-clone-backend-xo92.onrender.com";

    const[songData,setSongsData]=useState([]);
    const[track,setTrack]=useState(null);
    const[playStatus,setPlayStatus]=useState(false);
    const[albumsData,setAlbumsData]=useState([]);
    
    
   
    const[time,setTime]=useState({
        currentTime:{
            minute:0,
            second:0
        },
        totalTime:{
            minute:0,
            second:0
        }
    })


    const play=()=>{
        audioRef.current.play();
        setPlayStatus(true);
    }
    const pause=()=>{
        audioRef.current.pause();
        setPlayStatus(false);
    }

    const next=async()=>{
        songData.map(async(item,index)=>{
            if(track._id===item._id&&index<songData.length-1){
                await setTrack(songData[index+1]);
                await audioRef.current.play();
                setPlayStatus(true);
            }
        })
    }

    const prev=async()=>{
        songData.map(async(item,index)=>{
            if(track._id===item._id&&index>0){
                await setTrack(songData[index-1]);
                await audioRef.current.play();
                setPlayStatus(true);
            }
        })
    }

    

    const playWithId=async (id)=>{
        await songData.forEach((x)=>{
            if(x._id===id){
                setTrack(x);
            }
        })
        await audioRef.current.play();
        setPlayStatus(true);
    }

    const seekSong=async (e)=>{
        audioRef.current.currentTime=(e.nativeEvent.offsetX/seekBg.current.offsetWidth)*audioRef.current.duration;
    }

    const fetchAlbumsData=async()=>{
        const response=await axios.get(`${url}/api/album/list`);
        setAlbumsData(response.data.message);

    }
      
      
    const fetchSongsData=async()=>{
        const response=await axios.get(`${url}/api/song/list`);
        setSongsData(response.data.message);
        setTrack(response.data.message[0])
      }

    useEffect(()=>{
        setTimeout(()=>{
            audioRef.current.ontimeupdate=()=>{
                seekBar.current.style.width=(audioRef.current.currentTime/audioRef.current.duration)*100+"%";
                setTime({
                    currentTime:{
                        minute:Math.floor((audioRef.current.currentTime)/60),
                        second:Math.floor((audioRef.current.currentTime)%60)
                    },
                    totalTime:{
                        minute:Math.floor((audioRef.current.duration)/60),
                        second:Math.floor((audioRef.current.duration)%60)
                    }
                })
            }
        },1000)
    },[audioRef]);

    useEffect(()=>{
        fetchAlbumsData();
        fetchSongsData();
      },[])

    return(
        <PlayerContext.Provider 
            value={{
                audioRef,
                seekBar,
                seekBg,
                time,
                setTime,
                track,setTrack,
                playStatus,setPlayStatus,
                play,pause,
                playWithId,
                next,prev,
                seekSong,
                albumsData,
                songData
            }}
        >
            {children}
        </PlayerContext.Provider>
    );
}
