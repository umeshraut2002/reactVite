import React from 'react';

const Reset = () => {
    return(
        <>
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
        <div className="flex justify-between">
          <button className="w-full bg-gray-300 text-gray-800 py-2 px-4 rounded-r-lg font-medium hover:bg-gray-400 transition-colors duration-300">
            Reset Profile
          </button>
        </div>
        </div>
        </>
    )
}

export default Reset;