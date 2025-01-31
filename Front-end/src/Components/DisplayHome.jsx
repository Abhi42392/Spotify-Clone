import React, { useEffect,useContext } from 'react'
import NavBar from './NavBar'
import { Album } from './Album'
import SongItem from './SongItem'
import { PlayerContext } from '../Context/PlayerContext';




const DisplayHome = () => {
const{albumsData,songData}=useContext(PlayerContext);

function createAlbum(data,index){
  return(
      <Album key={index} name={data.name} image={data.image} desc={data.desc} bgColor={data.bgColor} id={data._id}/>
  )
}

function createSongItem(item,index){
  return(
    <SongItem key={index} name={item.name} image={item.image} desc={item.desc} id={item._id}/>
  )
}



return (
    <div >
        <NavBar />
            <div className='mb-4'>
                <h1 className='text-white font-bold text-2xl my-5'>Featured Charts</h1>
                 <div className='flex overflow-auto'>{albumsData.map(createAlbum)}</div>
            </div>
            <div className='mb-4'>
                <h1 className='text-white font-bold text-2xl my-5'>Today's biggest hits</h1>
                 <div className='flex overflow-auto'>{songData.map(createSongItem)}</div>
            </div>
            
    </div>
  )
}

export default DisplayHome