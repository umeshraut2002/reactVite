import React from "react";

const Navbar = () => {
    return (
        <div className="w-screen text-white bg-black">
            <nav className="flex items-center justify-between p-6 bg-orange-500 shadow-lg">
                <div className="text-2xl font-bold">
                    <img src="logo.png" alt="Logo" className="h-10" />
                </div>
                <ul className="flex space-x-6 text-lg">
                    <link
                    className="cursor-pointer hover:text-orange-300" 
                    >Home</link>
                    <li className="cursor-pointer hover:text-orange-300">About</li>
                    <li className="cursor-pointer hover:text-orange-300">Contact</li>
                    <li className="cursor-pointer hover:text-orange-300">GitHub</li>
                    <li className="cursor-pointer hover:text-orange-300">Log In</li>
                </ul>
                <button className="px-4 py-2 font-bold text-orange-500 bg-white rounded-lg hover:bg-gray-200">
                    Get Started
                </button>
            </nav>

        </div>
    )
}

export default Navbar;