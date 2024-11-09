import './App.css'

function App() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen px-4 text-white bg-gray-800">
        {/* Dark Mode Toggle Button */}
        <button className="px-6 py-3 mb-8 text-white bg-green-600 rounded-lg hover:bg-green-700">
            Dark Mode
        </button>

        {/* Header */}
        <h1 className="mb-8 text-3xl font-bold">Manage Your Todos</h1>

        {/* Add Todo Form */}
        <div className="flex w-full max-w-[600px] mb-6">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full px-4 py-3 text-gray-800 bg-gray-100 border border-gray-300 rounded-l-lg outline-none"
            />
            <button className="px-6 py-3 text-white bg-green-600 rounded-r-lg">
                Add
            </button>
        </div>

        {/* Todo Items Container */}
        <div className="w-full max-w-[600px] space-y-4 overflow-y-auto max-h-[60vh]">
            {/* Todo Item */}
            <div className="flex items-center px-4 py-3 bg-purple-100 border border-gray-300 rounded-lg shadow-sm gap-x-4">
                {/* Checkbox */}
                <input type="checkbox" className="w-6 h-6 cursor-pointer" />

                {/* Todo Text */}
                <input
                    type="text"
                    className="w-full px-2 py-1 text-gray-800 bg-transparent border rounded-lg outline-none"
                    value="Sample Todo"
                    readOnly
                />

                {/* Edit Button */}
                <button className="inline-flex items-center justify-center w-10 h-10 text-sm bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200">
                    ✏️
                </button>

                {/* Delete Button */}
                <button className="inline-flex items-center justify-center w-10 h-10 text-sm bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200">
                    ❌
                </button>
            </div>

            {/* Repeat Todo Item for example layout */}
            <div className="flex items-center px-4 py-3 bg-purple-100 border border-gray-300 rounded-lg shadow-sm gap-x-4">
                <input type="checkbox" className="w-6 h-6 cursor-pointer" />
                <input
                    type="text"
                    className="w-full px-2 py-1 text-gray-800 bg-transparent border rounded-lg outline-none"
                    value="Another Todo"
                    readOnly
                />
                <button className="inline-flex items-center justify-center w-10 h-10 text-sm bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200">
                    ✏️
                </button>
                <button className="inline-flex items-center justify-center w-10 h-10 text-sm bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200">
                    ❌
                </button>
            </div>
        </div>
    </div>
);
}

export default App
