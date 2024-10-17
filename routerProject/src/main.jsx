import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Navbar from './components/Navbar.jsx'

const router =createBrowserRouter([
  {
    path: "/",
    element: <Navbar />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <RouterProvider router={router} />
  </StrictMode>,
)
