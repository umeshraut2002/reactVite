import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-orange-600 text-center mb-4">User Profile</h1>
        
        <div className="bg-gray-50 p-4 rounded-lg mb-6">
          <p className="text-lg font-medium text-gray-800">
            Name: <span className="text-orange-600">Jane Doe</span>
          </p>
          <p className="text-lg font-medium text-gray-800 mt-2">
            Age: <span className="text-orange-600">30</span>
          </p>
          <p className="text-lg font-medium text-gray-800 mt-2">
            Location: <span className="text-orange-600">New York</span>
          </p>
        </div>

        <div className="flex justify-between">
          <button className="w-full bg-orange-500 text-white py-2 px-4 rounded-l-lg font-medium hover:bg-orange-600 transition-colors duration-300">
            Update Profile
          </button>
          <button className="w-full bg-gray-300 text-gray-800 py-2 px-4 rounded-r-lg font-medium hover:bg-gray-400 transition-colors duration-300">
            Reset Profile
          </button>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
