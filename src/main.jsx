import { StrictMode } from 'react'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './App.css'
import App from './App.jsx'
import { AppContextProvider } from './context/AppContext.jsx'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
 <AppContextProvider>
  <App/>
  </AppContextProvider>
    </BrowserRouter>,
  
)
