import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

return (
  <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-gray-200">
    <h1 className="text-3xl font-bold mb-6 text-white">Currency Converter</h1>

    <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-80">
      {/* From Currency Dropdown */}
      <div className="flex flex-col mb-4">
        <label className="mb-2 text-lg font-semibold">From</label>
        <select className="p-3 bg-gray-700 text-gray-200 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="INR">INR</option>
        </select>
      </div>

      {/* To Currency Dropdown */}
      <div className="flex flex-col mb-4">
        <label className="mb-2 text-lg font-semibold">To</label>
        <select className="p-3 bg-gray-700 text-gray-200 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="INR">INR</option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
        </select>
      </div>

      {/* Convert Button */}
      <button className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition duration-300">
        Convert
      </button>

      {/* Result Section */}
      <div className="mt-4 text-xl font-bold text-white">
        Result: 0.00
      </div>
    </div>
  </div>
);

}

export default App
