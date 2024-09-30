import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

return (
  <div className="min-h-screen flex items-center justify-center bg-gray-900">
    <div className="bg-gray-800 p-8 rounded-lg shadow-md">
      <div className="mb-4">
        <label className="block text-white text-sm font-medium mb-2" htmlFor="fromAmount">
          From
        </label>
        <input
          type="number"
          id="fromAmount"
          className="w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="0"
        />
        <select className="mt-2 w-full bg-gray-700 text-white rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="usd">USD</option>
          {/* Add more currency options here */}
        </select>
      </div>

      <div className="flex justify-center mb-4">
        <button className="bg-blue-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
          Swap
        </button>
      </div>

      <div className="mb-4">
        <label className="block text-white text-sm font-medium mb-2" htmlFor="toAmount">
          To
        </label>
        <input
          type="number"
          id="toAmount"
          className="w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="0"
        />
        <select className="mt-2 w-full bg-gray-700 text-white rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="inr">INR</option>
          {/* Add more currency options here */}
        </select>
      </div>

      <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
        Convert USD to INR
      </button>
    </div>
  </div>
);
}

export default App
