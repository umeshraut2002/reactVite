import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import About from './components/About.jsx'
import Root from './Root.jsx'
import Contact from './components/Contact.jsx'
import Github from './components/Github.jsx'
import Login from './components/Login.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "home",
        element: ""
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path: "github",
        element: <Github />
      },
      {
        path: "login",
        element: <Login />
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
