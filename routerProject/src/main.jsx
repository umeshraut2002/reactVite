import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'
import About from './components/About.jsx'
import Root from './Root.jsx'
import Contact from './components/Contact.jsx'
import Github,{githubInfoLoader} from './components/Github.jsx'
import Login from './components/Login.jsx'
import Herosection from './components/Herosection.jsx'
import User from './components/User.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "home",
        element: <Herosection />
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
        element: <Github />,
        loader: githubInfoLoader
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: ":userid",
        element: <User />
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
