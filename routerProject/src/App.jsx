import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar';

function App() {
  return(
  <div className="w-screen h-screen text-white bg-black">
      {/* Navigation Bar */}
      
      {/* Main Section */}
      <main className="flex flex-col items-center justify-between p-10 md:flex-row">
        <div className="space-y-4 md:w-1/2">
          <h1 className="text-4xl font-bold text-orange-400 md:text-6xl">Build Your Future</h1>
          <p className="text-lg md:text-xl">
            Empower your development with the most modern UI experience.
          </p>
          <button className="px-6 py-3 font-semibold text-white bg-orange-500 rounded-lg hover:bg-orange-600">
            Download Now
          </button>
        </div>
        <div className="mt-6 md:w-1/2 md:mt-0">
          <img src="hero-image.png" alt="Hero" className="w-full h-auto rounded-lg shadow-lg" />
        </div>
      </main>

      {/* Second Section with Image and Headings */}
      <section className="flex flex-col items-center p-10 space-y-6">
        <img src="secondary-image.png" alt="Secondary" className="w-full max-w-4xl rounded-lg shadow-lg" />
        <h2 className="text-3xl font-bold text-orange-400">Seamless Integration</h2>
        <p className="max-w-2xl text-lg text-center md:text-left">
          Experience unmatched integration with various technologies and services.
        </p>
      </section>

      {/* Footer */}
      <footer className="p-10 mt-10 text-gray-400 bg-gray-900">
        <div className="flex items-center justify-between">
          <img src="logo.png" alt="Footer Logo" className="h-10" />
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white">Home</a>
            <a href="#" className="hover:text-white">GitHub</a>
            <a href="#" className="hover:text-white">Privacy Policy</a>
          </div>
        </div>
        <div className="flex justify-between mt-6">
          <div className="space-y-2 text-sm">
            <h3 className="font-bold">Resources</h3>
            <a href="#" className="hover:text-white">Documentation</a>
            <a href="#" className="hover:text-white">API Reference</a>
          </div>
          <div className="space-y-2 text-sm">
            <h3 className="font-bold">Follow Us</h3>
            <a href="#" className="hover:text-white">Twitter</a>
            <a href="#" className="hover:text-white">LinkedIn</a>
          </div>
          <div className="space-y-2 text-sm">
            <h3 className="font-bold">Legal</h3>
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App
