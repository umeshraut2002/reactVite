import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return(
    <>
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg border border-gray-200 p-4 bg-white transform transition-transform duration-300 hover:scale-105">
      <img 
        src="https://via.placeholder.com/150" 
        alt="Product" 
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <div className="mt-4 p-2 text-center">
        <p className="text-xl font-semibold text-orange-600">$29.99</p>
        <p className="text-gray-700 text-sm mt-2">A sleek and high-quality product designed for modern needs. Experience exceptional value and quality.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <button className="bg-orange-500 text-white py-2 px-6 rounded-full font-medium hover:bg-orange-600 transition-colors duration-300">Buy</button>
          <button className="border border-orange-500 text-orange-500 py-2 px-6 rounded-full font-medium hover:bg-orange-500 hover:text-white transition-colors duration-300">Add to Cart</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
