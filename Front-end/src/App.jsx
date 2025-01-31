import React, { useContext } from 'react'
import SideBar from './Components/SideBar'
import Player from './Components/Player'

import Display from './Components/Display'
import { PlayerContext } from './Context/PlayerContext'
const App = () => {
  const {audioRef,track,songData}=useContext(PlayerContext);
  return (
    <div className='bg-black h-screen'>
      {
        songData&&songData.length!==0?
        <>
        <div className='h-[90%] flex space-x-4'>
        <SideBar />
        <Display />
      </div>
      <Player />
      </>:
      null
      }
      
      <audio ref={audioRef} src={track?track.file:""} preload='auto'></audio>
    </div>
  )
}

export default App