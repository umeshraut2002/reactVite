import {StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Root from './Root.jsx';
import Herosection from './component/layout/Herosection.jsx';
import Main from './component/layout/Main.jsx';
import About from './component/about/About.jsx';
import Blog from './component/blog/Blog.jsx'

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
        path: "home",
        element: <Main />
      },
      { 
        path: "about",
        element: <About />
      },
      {
        path: "blog",
        element: <Blog />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
