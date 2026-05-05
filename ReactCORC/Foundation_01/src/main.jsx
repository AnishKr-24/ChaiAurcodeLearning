import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Anish from './Anish.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Anish />
    
  </StrictMode>,
)
