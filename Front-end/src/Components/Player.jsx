import React,{useEffect, useState,useContext} from 'react'
import { assets } from '../assets/frontend-assets/assets'
import { PlayerContext } from '../Context/PlayerContext'
const Player = () => {
  const{seekBg,seekBar,time,
    playStatus,play,pause,track,next,prev,seekSong
  }=useContext(PlayerContext);

  return track? (
    <div className='h-[10%] m-2 flex justify-center  items-center lg:justify-between'>
      <div className='hidden lg:flex space-x-2 items-center h-full'>
          <img src={track.image} alt="mini player icon" className='h-10'/>
          <div>
              <p className='text-white font-semibold text-sm'>{track.name}</p>
              <p className='text-white font-light text-sm'>{track.desc}</p>
          </div>
      </div>
      <div className='flex-col items-center justify-center w-[75%] lg:w-[35%]'>
        <div className='flex space-x-2 w-full justify-center'>
            <img src={assets.shuffle_icon} alt="shuffle" className='h-4'/>
            <img src={assets.prev_icon} alt="previous song" className='h-4' onClick={prev}/>
            {!playStatus?
            <img src={assets.play_icon} alt="play" className='h-4' onClick={play}/>
            :<img src={assets.pause_icon} alt='pause'className='h-4'  onClick={pause} />
            }
            <img src={assets.next_icon} alt="next song" className='h-4' onClick={next}/>
            <img src={assets.loop_icon} alt="loop" className='h-4' />
        </div>
        <div className='flex gap-5 items-center justify-center text-white'>
            <p>{time.currentTime.minute}:{time.currentTime.second}</p>
            <div ref={seekBg} onClick={seekSong} className='w-[60vw] max-w-[500px] bg-gray-300 cursor-pointer rounded-full'>
              <hr ref={seekBar} className='h-1 bg-green-800 border-none w-0'/>
            </div>
            <p>{time.totalTime.minute}:{time.totalTime.second}</p>
        </div>
      </div>
        <div className='hidden lg:flex space-x-2 items-center' >
            <img src={assets.plays_icon} alt="plays" className='h-4'/>
            <img src={assets.mic_icon} alt="mic" className='h-4' />
            <img src={assets.queue_icon} alt="queue" className='h-4'/>
            <img src={assets.speaker_icon} alt="mini player" className='h-4' />
            <img src={assets.volume_icon} alt="sound" className='h-4' />
            <div className='h-1 w-12 bg-white rounded-md'></div>
            <img src={assets.mini_player_icon} alt="minimise"  className='h-4'/>
            <img src={assets.zoom_icon} alt="zoom" className='h-4'/>
        </div>  
    </div>
  ):null
}
export default Player;  