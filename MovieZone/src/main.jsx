import { StrictMode } from 'react';
import React from 'react';
import './index.css';
import { createRoot } from 'react-dom/client';
import {RouterProvider,createBrowserRouter} from 'react-router-dom';
import Root from './Root.jsx';
import About from './component/about/About.jsx';
import Blog from './component/blog/Blog.jsx';
import Movies from './component/movies/Movies.jsx';
import Contact from './component/contact/Contact.jsx';
import Home from './component/Home/Home.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "home",
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "blog",
        element: <Blog />
      },
      {
        path: "movies",
        element: <Movies />
      },
      {
        path: "contact",
        element: <Contact />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
