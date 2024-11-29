import { useState } from 'react'
import './App.css'
import { SunIcon, MoonIcon } from '@heroicons/react/outline';

function App() {
 const [darkMode, setDarkMode] = useState(false);

  return (
    <>
    <div className={`${darkMode ? 'dark bg-black text-white' : 'bg-white text-black'} w-screen h-screen`}>
      <header className="flex items-center justify-between p-4 bg-blue-900 dark:bg-blue-800">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 text-white bg-blue-500 rounded-full dark:bg-blue-700 hover:bg-blue-600"
        >
          {darkMode ? (
            <SunIcon className="w-6 h-6" />
          ) : (
            <MoonIcon className="w-6 h-6" />
          )}
        </button>
      </header>

      <div className="flex w-full h-full">
        {/* Sidebar */}
        <div className="w-1/4 h-full p-4 bg-blue-900 dark:bg-blue-800">
          <h2 className="mb-6 text-xl font-bold">Features</h2>
          <ul className="space-y-4">
            <li>File Upload</li>
            <li>Custom Parameters</li>
            <li>Forecast Visualization</li>
            <li>Historical Data</li>
            <li>Dashboard Widgets</li>
          </ul>
        </div>

        <div className="flex-1 p-4 overflow-y-auto">
          <div className="grid gap-6">
            {/* File Upload Component */}
            <div className="p-4 bg-white border rounded shadow dark:bg-black">
              <h2 className="mb-2 text-lg font-semibold">Upload Data</h2>
              <input type="file" className="w-full px-2 py-1 border rounded file-input" />
            </div>

            <div className="p-4 bg-white border rounded shadow dark:bg-black">
              <h2 className="mb-2 text-lg font-semibold">Custom Parameters</h2>
              <form>
                <label className="block mb-2">Select Category:</label>
                <select className="w-full p-2 mb-4 border rounded">
                  <option value="electronics">Electronics</option>
                  <option value="fashion">Fashion</option>
                  <option value="grocery">Grocery</option>
                  <option value="cloths">Cloths</option>
                  
                </select>
                <label className="block mb-2">Select Time Frame:</label>
                <input type="date" className="w-full p-2 border rounded" />
              </form>
            </div>

            <div className="p-4 bg-white border rounded shadow dark:bg-black">
              <h2 className="mb-2 text-lg font-semibold">Forecast Visualization</h2>
              <div className="flex items-center justify-center h-64 bg-gray-100 rounded dark:bg-gray-700">
                <p>Chart Placeholder</p>
              </div>
            </div>

            <div className="p-4 bg-white border rounded shadow dark:bg-black">
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

            <div className="p-4 bg-white border rounded shadow dark:bg-black">
              <h2 className="mb-2 text-lg font-semibold">Real-Time Prediction</h2>
              <p>Dynamic predictions will appear here.</p>
            </div>

            {/* Insights and Recommendations */}
            <div className="p-4 bg-white border rounded shadow dark:bg-black">
              <h2 className="mb-2 text-lg font-semibold">Insights and Recommendations</h2>
              <p>Key insights and suggestions based on data analysis.</p>
            </div>

            <div className="p-4 bg-white border rounded shadow dark:bg-black">
              <h2 className="mb-2 text-lg font-semibold">Seasonality Analysis</h2>
              <p>Chart for seasonal patterns goes here.</p>
            </div>
            
            <div className="p-4 bg-white border rounded shadow dark:bg-black">
              <h2 className="mb-2 text-lg font-semibold">User Management</h2>
              <p>Manage roles and permissions here.</p>
            </div>

            <div className="p-4 bg-white border rounded shadow dark:bg-black">
              <h2 className="mb-2 text-lg font-semibold">Download Reports</h2>
              <button className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600">
                Download as CSV
              </button>
            </div>

            <div className="p-4 bg-yellow-100 border rounded shadow dark:bg-yellow-800">
              <h2 className="mb-2 text-lg font-semibold">Notifications</h2>
              <p>Alerts and updates will appear here.</p>
            </div>

            {/* Performance Metrics */}
            <div className="p-4 bg-white border rounded shadow dark:bg-black">
              <h2 className="mb-2 text-lg font-semibold">Performance Metrics</h2>
              <p>Track KPI performance here.</p>
            </div>

            <div className="p-4 bg-white border rounded shadow dark:bg-black">
              <h2 className="mb-2 text-lg font-semibold">API Integration</h2>
              <p>API connection status and sync details.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="p-4 text-center bg-blue-900 dark:bg-blue-800">
        <p className="text-sm">&copy; 2025 Inventory Forecasting App</p>
      </footer>
    </div>
    </>
  )
}

export default App
