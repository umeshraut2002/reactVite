import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <header className="flex items-center justify-between w-screen p-4 bg-orange-600">
        <h1 className="text-3xl font-bold">MoviezZone</h1>
        <nav>

          <ul className="flex space-x-6">

            <li>
              <NavLink
                to='/home'
                className={({ isActive }) =>
                  `cursor-pointer ${isActive ? 'text-black' : 'hover:text-white'}`}
              >
                Home
              </NavLink>
            </li>

            {/* <li>
              <NavLink
                to='/about'
                className={({ isActive }) =>
                  `cursor-pointer ${isActive ? 'text-black' : 'hover:text-white'}`
                }
              >
                About
              </NavLink>
            </li>

            <li>
              <NavLink
                to='/movies'
                className={({ isActive }) =>
                  `cursor-pointer ${isActive ? 'text-black' : 'hover:text-white'}`
                }
              >
                Movies
              </NavLink>
            </li>

            <li>
              <NavLink
                to='/blog'
                className={({ isActive }) =>
                  `cursor-pointer ${isActive ? 'text-black' : 'hover:text-white'}`

                }
              >
                Blog
              </NavLink>
            </li>

            <li>
              <NavLink
                to='/contact'
                className={({ isActive }) =>
                  `cursor-pointer ${isActive ? 'text-black' : 'hover:text-white'}`
                }
              >
                Contact
              </NavLink>
            </li> */}

          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header;