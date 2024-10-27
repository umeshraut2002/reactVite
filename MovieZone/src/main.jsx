import { StrictMode } from 'react';
import React from 'react';
import './index.css';
import { createRoot } from 'react-dom/client';
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom';
import Root from './Root.jsx';
import About from './component/about/About.jsx';
import Blog from './component/blog/Blog.jsx';
import Movies from './component/movies/Movies.jsx';
import Contact from './component/contact/Contact.jsx';
import Home from './component/Home/Home.jsx'
import User from './component/user/User.jsx';


// this is method one to route the element 
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root />,
//     children: [
//       {
//         path: "home",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "blog",
//         element: <Blog />
//       },
//       {
//         path: "movies",
//         element: <Movies />
//       },
//       {
//         path: "contact",
//         element: <Contact />
//       }
//     ]
//   }
// ])

// another method routes the element 

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="home" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="blog" element={<Blog />} />
      <Route path="contact" element={<Contact />} />
      <Route path="movies" element={<Movies />} />
      <Route path="user" element={<User />}
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
