import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom';
import PlayerState from './Context/PlayerContext.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <PlayerState>
        <App />
      </PlayerState>
    </BrowserRouter>
  </StrictMode>,
)
