import React from 'react';

const Header = () => {
    return(
        <>
        <header className="flex items-center justify-between w-full p-4 bg-orange-600">
          <h1 className="text-3xl font-bold">Movie Search App</h1>
          <nav className="flex space-x-6">
            <a href="#" className="text-white transition hover:text-orange-300">
              Home
            </a>
            <a href="#" className="text-white transition hover:text-orange-300">
              About
            </a>
            <a href="#" className="text-white transition hover:text-orange-300">
              Movies
            </a>
            <a href="#" className="text-white transition hover:text-orange-300">
              Blog
            </a>
            <a href="#" className="text-white transition hover:text-orange-300">
              Contact
            </a>
          </nav>
        </header>
        </>
    )
}

export default Header;