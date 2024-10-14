import { useState } from 'react';
import './App.css'

function App() {
  return (
    <div className="w-screen h-screen bg-gray-900 wtext-white">
      {/* Navbar */}
      <nav className="p-4 bg-gray-800 shadow-lg">
        <div className="container flex items-center justify-between mx-auto">
          <div className="text-2xl font-bold">To-Do App</div>
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:text-gray-300">Home</a></li>
            <li><a href="#" className="hover:text-gray-300">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Header */}
      <header className="py-10 text-center bg-gray-700">
        <h1 className="mb-4 text-4xl font-semibold">Organize Your Day with To-Do List</h1>
        <p className="max-w-2xl mx-auto text-lg">
          A to-do list helps you stay focused, organized, and achieve your daily goals effectively.
        </p>
      </header>

      {/* Main To-Do Section */}
      <main className="container py-10 mx-auto">
        <div className="max-w-lg p-6 mx-auto bg-gray-800 rounded-lg shadow-md">
          <h2 className="mb-4 text-2xl font-semibold">Your To-Do List</h2>

          {/* Input Field and Submit Button */}
          <div className="flex mb-6">
            <input
              type="text"
              placeholder="Add a new task"
              className="flex-grow p-2 bg-gray-700 border-none rounded-l-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              className="px-4 py-2 font-bold text-white bg-indigo-600 rounded-r-lg hover:bg-indigo-500"
            >
              Add Task
            </button>
          </div>

          {/* To-Do List Items */}
          <ul className="space-y-4">
            <li className="flex items-center justify-between p-2 bg-gray-700 rounded-lg">
              <span>Sample Task</span>
              <div className="space-x-2">
                <button className="text-yellow-400 hover:text-yellow-300">Edit</button>
                <button className="text-red-400 hover:text-red-300">Delete</button>
              </div>
            </li>
          </ul>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 mt-10 bg-gray-800">
        <div className="container mx-auto text-center">
          <p className="mb-4 text-gray-400">Follow us on</p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="text-blue-400 hover:text-blue-300">Twitter</a>
            <a href="#" className="text-gray-400 hover:text-gray-300">GitHub</a>
            <a href="#" className="text-pink-400 hover:text-pink-300">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
