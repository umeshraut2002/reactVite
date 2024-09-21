import { useState } from "react";
import "./App.css";

function App() {

  return (
    <>
      <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-lg p-6">
          {/* <!-- Password Length Input --> */}
          <div className="mb-6">
            <label
              className="block text-sm font-medium text-gray-400"
              htmlFor="passwordLength"
            >
              Password Length
            </label>
            <input
              id="passwordLength"
              type="number"
              min="1"
              max="30"
              placeholder="8"
              className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-gray-200 placeholder-gray-500 sm:text-sm"
            />
          </div>

          {/* <!-- Checkboxes for Options --> */}
          <div className="mb-6">
            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                id="uppercase"
                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 bg-gray-700 border-gray-600 rounded"
              />
              <label
                className="ml-2 block text-sm text-gray-400"
                htmlFor="uppercase"
              >
                Include Uppercase Letters
              </label>
            </div>

            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                id="numbers"
                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 bg-gray-700 border-gray-600 rounded"
              />
              <label
                className="ml-2 block text-sm text-gray-400"
                htmlFor="numbers"
              >
                Include Numbers
              </label>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="symbols"
                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 bg-gray-700 border-gray-600 rounded"
              />
              <label
                className="ml-2 block text-sm text-gray-400"
                htmlFor="symbols"
              >
                Include Symbols
              </label>
            </div>
          </div>

          {/* <!-- Generate Button --> */}
          <div className="mt-6">
            <button className="w-full px-4 py-2 bg-indigo-600 text-white font-medium rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
              Generate Password
            </button>
          </div>

          {/* <!-- Display Generated Password --> */}
          <div className="mt-6">
            <input
              type="text"
              placeholder="Generated password will appear here"
              readOnly
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-gray-200 placeholder-gray-500 sm:text-sm"
            />
          </div>

          {/* <!-- Copy to Clipboard Button --> */}
          <div className="mt-4">
            <button className="w-full px-4 py-2 bg-green-500 text-white font-medium rounded-md shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400">
              Copy to Clipboard
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
