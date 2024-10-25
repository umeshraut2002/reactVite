import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Root from './Root';
import Herosection from './component/layout/Herosection';
import Main from './component/layout/Main';
import About from './component/about/About';
import Blog from './component/blog/Blog'

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
