import { useState } from 'react'
import './App.css'

function App() {
  
  return (
  <>  
  <div className="flex items-center justify-center min-h-screen text-gray-900 transition-colors bg-gray-100 dark:bg-gray-900 dark:text-white">
    <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800">
      <h1 className="mb-6 text-2xl font-bold text-center">Manage Your Todos</h1>
      
      {/* Input Section */}
      <div className="flex items-center mb-4">
        <input
          type="text"
          placeholder="Write Todo..."
          className="flex-grow p-2 border border-gray-300 rounded-l-lg dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
        />
        <button className="px-4 py-2 font-semibold text-white transition-colors bg-green-500 rounded-r-lg hover:bg-green-600">
          Add
        </button>
      </div>

      {/* Todo Items */}
      <div className="space-y-3">
        <div className="flex items-center justify-between p-3 bg-gray-200 rounded-lg dark:bg-gray-700">
          <span className="flex-grow">Learn DSA</span>
          <div className="flex space-x-2">
            <button className="p-1 text-blue-500 hover:text-blue-600">
              ✏️
            </button>
            <button className="p-1 text-red-500 hover:text-red-600">
              ❌
            </button>
          </div>
        </div>
        
        <div className="flex items-center justify-between p-3 bg-gray-200 rounded-lg dark:bg-gray-700">
          <span className="flex-grow">Learn Node.js</span>
          <div className="flex space-x-2">
            <button className="p-1 text-blue-500 hover:text-blue-600">
              ✏️
            </button>
            <button className="p-1 text-red-500 hover:text-red-600">
              ❌
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between p-3 bg-gray-200 rounded-lg dark:bg-gray-700">
          <span className="flex-grow">Learn React</span>
          <div className="flex space-x-2">
            <button className="p-1 text-blue-500 hover:text-blue-600">
              ✏️
            </button>
            <button className="p-1 text-red-500 hover:text-red-600">
              ❌
            </button>
          </div>
        </div>
      </div>

      {/* Dark Mode Toggle */}
      <div className="mt-6 text-center">
        <button className="px-4 py-2 font-semibold text-white transition-colors bg-blue-500 rounded-lg hover:bg-blue-600">
          Toggle Dark Mode
        </button>
      </div>
    </div>
  </div>
  </>
);
}

export default App
