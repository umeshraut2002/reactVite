import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 const [darkMode, setDarkMode] = useState(false);

  return (
    <>
    <div className={`${darkMode ? "dark bg-gray-900 text-white" : "bg-gray-100 text-gray-900"} min-h-screen m-0`}>
      <div className="flex w-screen h-screen">
        {/* Left Sidebar */}
        <div className="w-1/4 h-full p-4 bg-gray-200 dark:bg-gray-800">
          <h2 className="mb-6 text-xl font-bold">Features</h2>
          <ul className="space-y-4">
            <li>1. File Upload</li>
            <li>2. Custom Parameters</li>
            <li>3. Forecast Visualization</li>
            <li>4. Historical Data</li>
            <li>5. Dashboard</li>
          </ul>
        </div>

        {/* Right Main Content */}
        <div className="w-3/4 h-full p-6 overflow-y-auto">
          <h1 className="mb-4 text-2xl font-bold">Inventory Demand Forecasting</h1>
          <div className="space-y-6">
            {/* File Upload */}
            <div className="p-4 bg-white border rounded shadow dark:bg-gray-800">
              <h2 className="mb-2 text-lg font-semibold">Upload Data</h2>
              <input type="file" className="px-2 py-1 border rounded file-input" />
            </div>

            {/* Parameters Form */}
            <div className="p-4 bg-white border rounded shadow dark:bg-gray-800">
              <h2 className="mb-2 text-lg font-semibold">Custom Parameters</h2>
              <form>
                <label className="block mb-2">Select Category:</label>
                <select className="w-full p-2 mb-4 border rounded">
                  <option value="electronics">Electronics</option>
                  <option value="fashion">Fashion</option>
                  <option value="grocery">Grocery</option>
                </select>
                <label className="block mb-2">Select Time Frame:</label>
                <input type="date" className="w-full p-2 border rounded" />
              </form>
            </div>

            {/* Prediction Chart */}
            <div className="p-4 bg-white border rounded shadow dark:bg-gray-800">
              <h2 className="mb-2 text-lg font-semibold">Forecast Visualization</h2>
              <div className="flex items-center justify-center h-64 bg-gray-100 rounded dark:bg-gray-700">
                <p>Chart Placeholder</p>
              </div>
            </div>

            {/* Historical Data */}
            <div className="p-4 bg-white border rounded shadow dark:bg-gray-800">
              <h2 className="mb-2 text-lg font-semibold">Historical Data</h2>
              <table className="w-full text-left table-auto">
                <thead>
                  <tr>
                    <th className="px-4 py-2 border">Date</th>
                    <th className="px-4 py-2 border">Category</th>
                    <th className="px-4 py-2 border">Prediction</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-2 border">2025-11-20</td>
                    <td className="px-4 py-2 border">Electronics</td>
                    <td className="px-4 py-2 border">120 Units</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full p-4 text-center bg-gray-300 dark:bg-gray-700">
        <div className="flex items-center justify-between">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
          >
            Toggle {darkMode ? "Light" : "Dark"} Theme
          </button>
          <p className="text-sm">&copy; 2025 Inventory Forecasting App</p>
        </div>
      </footer>
    </div>
    </>
  )
}

export default App
