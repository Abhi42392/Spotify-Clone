import React, { useContext, useEffect, useState } from 'react'
import NavBar from './NavBar'
import { useParams } from 'react-router-dom'
import { assets } from '../assets/frontend-assets/assets'
import { PlayerContext } from '../Context/PlayerContext'

const DisplayAlbum = ({ album }) => {
    const { id } = useParams();
    const { albumsData, songData,playWithId } = useContext(PlayerContext);
    const [albumData, setAlbumData] = useState({});

    useEffect(() => {
        albumsData.forEach((item) => {
            if (item._id === id) {
                console.log(item);
                setAlbumData(item);
            }
        });
    }, []);

    
    return (
        <div className='text-white'>
            <NavBar />
            <div className='flex flex-col gap-8 mt-10 md:flex-row md:items-end'>
                <img src={albumData.image} className='h-48 rounded w-fit' />
                <div className='flex flex-col justify-end space-y-2'>
                    <p>Playlist</p>
                    <h1 className='text-6xl font-bold'>{albumData.name}</h1>
                    <p>Your weekly update of the most played tracks</p>
                    <div className='flex'>
                        <img src={assets.spotify_logo} alt="spotify logo" className='h-6 w-6' />
                        <p>Spotify</p>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]'>
                <p><b className='mr-4'>#</b>Title</p>
                <p>Album</p>
                <p>Date Added</p>
                <img src={assets.clock_icon} alt="clock" className='h-4 m-auto' />
            </div>
            <hr className='my-4' />
            {songData.filter((x) => x.album === album.name).map((data, index) => (
                <div className='grid grid-cols-3 sm:grid-cols-4 items-center gap-2 p-2 text-[#a7a7a7] hover:bg-[#fffffff6]' onClick={()=>{playWithId(data._id)}}>
                    <p className='mr-4'><b>{index + 1}</b>
                        <img src={data.image} className='h-12 inline mx-2' />
                        {data.name}
                    </p>
                    <p>{albumData.name}</p>
                    <p>5 days ago</p>
                    <p className='m-auto'>{data.duration}</p>
                </div>
            ))}
        </div>
    )
}

export default DisplayAlbum;
