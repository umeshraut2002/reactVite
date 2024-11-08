import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return(
    <div className={`max-w-sm mx-auto p-4 rounded-lg shadow-lg ${isDark ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
    {/* Toggle Button */}
    <div className="flex justify-end">
      <button
        onClick={toggleTheme}
        className={`p-2 rounded-full ${isDark ? 'bg-gray-700' : 'bg-gray-300'}`}
        aria-label="Toggle Dark Mode"
      >
        {isDark ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10 2a8 8 0 110 16 8 8 0 010-16zm0 14a6 6 0 100-12 6 6 0 000 12z" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10 0c1.103 0 2 .897 2 2v1c0 1.103-.897 2-2 2s-2-.897-2-2V2c0-1.103.897-2 2-2zm0 15c1.103 0 2 .897 2 2v1c0 1.103-.897 2-2 2s-2-.897-2-2v-1c0-1.103.897-2 2-2zm8-7c0-1.103-.897-2-2-2h-1c-1.103 0-2 .897-2 2s.897 2 2 2h1c1.103 0 2-.897 2-2zm-15 0c0-1.103-.897-2-2-2H1c-1.103 0-2 .897-2 2s.897 2 2 2h1c1.103 0 2-.897 2-2zm13.071-8.071c.78-.78 2.047-.78 2.828 0s.78 2.047 0 2.828l-.707.707c-.78.78-2.047.78-2.828 0s-.78-2.047 0-2.828zm-13.07 13.071c.78-.78 2.047-.78 2.828 0s.78 2.047 0 2.828l-.707.707c-.78.78-2.047.78-2.828 0s-.78-2.047 0-2.828zm13.07 2.828c-.78-.78-.78-2.047 0-2.828l.707-.707c.78-.78 2.047-.78 2.828 0s.78 2.047 0 2.828l-.707.707c-.78.78-2.047.78-2.828 0zM3.536 2.464c-.78.78-.78 2.047 0 2.828l.707.707c.78.78 2.047.78 2.828 0s.78-2.047 0-2.828L6.364 2.464c-.78-.78-2.047-.78-2.828 0z" />
          </svg>
        )}
      </button>
    </div>

    {/* Card Content */}
    <div className="mt-4">
      <h2 className="text-xl font-semibold">Card Title</h2>
      <p className="mt-2 text-sm">
        This is some example text for the card. The theme changes when you toggle the button above.
      </p>
      <img
        src="https://via.placeholder.com/150"
        alt="Example"
        className="mt-4 rounded-lg w-full h-32 object-cover"
      />
    </div>
  </div>
  )
}

export default App
