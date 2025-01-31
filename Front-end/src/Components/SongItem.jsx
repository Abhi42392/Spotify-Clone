import React,{useContext} from 'react'
import { PlayerContext } from '../Context/PlayerContext';
const SongItem = (props) => {
  const{playWithId}=useContext(PlayerContext);
  return (
    <div className='min-w-[180px] py-2 px-3 cursor-pointer hover:bg-[#ffffff26]' onClick={()=>{playWithId(props.id)}}>
        <img src={props.image} alt="song" className='rounded' />
        <h1 className='font-bold text-lg mt-2 mb-1 text-white'>{props.name}</h1>
        <p className='text-slate-200 text-sm'>{props.desc}</p>
    </div>
  )
}

export default SongItem                                    