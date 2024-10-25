import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex flex-col w-screen min-h-screen text-white bg-black">
        {/* Navigation Bar */}
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

        {/* Hero Section with Slider */}
        <section className="flex flex-col items-center justify-between w-full p-8 bg-orange-800 lg:flex-row lg:p-16">
          {/* Hero Text */}
          <div className="text-center lg:w-1/2 lg:text-left">
            <h2 className="mb-4 text-5xl font-bold">Discover Amazing Movies</h2>
            <p className="mb-6 text-lg text-gray-200">
              Search for your favorite movies, get detailed info, and add them
              to your personalized list.
            </p>
            <button className="px-6 py-3 text-white transition bg-orange-600 rounded-lg hover:bg-orange-900">
              Get Started
            </button>
          </div>
          {/* Hero Slider (Image) */}
          <div className="mt-8 lg:w-1/2 lg:mt-0">
            <img src="https://images.pexels.com/photos/7991163/pexels-photo-7991163.jpeg?auto=compress&cs=tinysrgb&w=600" />
          </div>
        </section>

        {/* Main Section with Movie Cards */}
        <main className="w-full max-w-6xl px-4 py-10 mx-auto">
          <h3 className="mb-8 text-3xl font-bold text-center">
            Popular Movies
          </h3>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Example Movie Card */}
            <div className="p-4 transition-shadow duration-300 bg-gray-900 rounded-lg shadow-lg hover:shadow-orange-500">
              <img
                src="https://posters.movieposterdb.com/24_04/2024/11152168/s_if-movie-poster_006c6837.jpg"
                className="mb-4 mr-4 bg-center bg-cover rounded-lg w-96 h-96"
              />

              <h4 className="mb-2 text-xl font-semibold">Movie Title</h4>
              <p className="mb-2 text-gray-400">IMDb Rating: 8.5</p>
              <button className="px-4 py-2 text-white transition-colors bg-orange-600 rounded-lg hover:bg-orange-800">
                Add to Favorites
              </button>
            </div>

            {/* Repeat similar cards for other movies */}
            <div className="p-4 bg-gray-900 rounded-lg shadow-lg">
              <img
                src="https://posters.movieposterdb.com/24_06/2024/11315808/l_joker-folie-a-deux-movie-poster_8b8497ec.jpg"
                className="mb-4 mr-4 bg-center bg-cover rounded-lg w-96 h-96"
              />

              <h4 className="mb-2 text-xl font-semibold">
                Another Movie Title
              </h4>
              <p className="mb-2 text-gray-400">IMDb Rating: 7.9</p>
              <button className="px-4 py-2 text-white bg-orange-600 rounded-lg hover:bg-orange-800">
                Add to Favorites
              </button>
            </div>

            {/* Add more cards as needed */}
          </div>
        </main>

        {/* Footer */}
        <footer className="w-full p-4 mt-auto bg-orange-800">
          <p className="text-sm text-center text-white">
            © 2025 Umesh Raut. All rights reserved.
          </p>
        </footer>
      </div>
    </>
  );
}

export default App;
