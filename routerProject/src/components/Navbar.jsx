import React from "react";
import {Link, NavLink} from 'react-router-dom'

const Navbar = () => {
    
    const click = () => {
        // window.Location.href='https://play.google.com/store/apps/details?id=com.chaicode.courses'
        window.open('https://play.google.com/store/apps/details?id=com.chaicode.courses')
    }
    
    return (
        <div className="w-screen text-white bg-black">
            <nav className="flex items-center justify-between p-6 bg-orange-500 shadow-lg">
                <div className="text-2xl font-bold">
                    <img src="logo.png" alt="Logo" className="h-10" />
                </div>
                <ul className="flex space-x-6 text-lg">
                    <li> <NavLink className={() => `cursor-pointer hover:text-orange-300`}> </NavLink> Home</li> 
                    <li> <NavLink className={() => `cursor-pointer hover:text-orange-300`}> </NavLink> About</li> }
                    <li> <NavLink className={() => `cursor-pointer hover:text-orange-300`}> </NavLink> Contact</li>
                    <li> <NavLink className={() => `cursor-pointer hover:text-orange-300`}> </NavLink> GitHub</li>
                    <li> <NavLink className={() => `cursor-pointer hover:text-orange-300`}> </NavLink> Log In</li>
                </ul>
                <button onClick={click} className="px-4 py-2 font-bold text-orange-500 bg-white rounded-lg hover:bg-gray-200">
                    Get Started
                </button>
            </nav>
        </div>
    );
};

export default Navbar;
