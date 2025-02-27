import React from 'react'
import { Route,Routes } from 'react-router-dom';
import { ToastContainer} from 'react-toastify'
import AddAlbum from './pages/AddAlbum';
import AddSong from './pages/AddSong';
import ListSong from './pages/ListSong';
import ListAlbum from './pages/ListAlbum';
import SideBar from './Components/SideBar';
import NavBar from './Components/NavBar';
export const url="https://spotify-clone-backend-xo92.onrender.com"
const App = () => {
  return (
    <div className='flex items-start min-h-screen'>
      <ToastContainer />
      <SideBar/>
      <div className='flex-1 h-screen overflow-y-scroll bg-[#F3FFF7]'>
        <NavBar />
        <div className='pt-8 pl-5 sm:pt-12 sm:pl-12'>
          <Routes>
            <Route path='/add-song' element={<AddSong/>}/>
            <Route path='/add-album' element={<AddAlbum/>}/>
            <Route path='/list-song' element={<ListSong/>}/>
            <Route path='/list-album' element={<ListAlbum/>}/>
          </Routes>
        </div>
      </div>

    </div>
  )
}

export default App
