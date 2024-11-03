import React, {useContext, useState} from 'react';
import { UserContext } from '../context/UserContext';

const Update = () => {

    const {user} = useContext(UserContext);
    
    const handleUpdate = () => {
        user.age = 23;
    }

    return(
        <>
        <div className="flex flex-col items-center justify-center h-screen p-4 bg-gray-100">
                <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
                    <h1 className="mb-4 text-3xl font-bold text-center text-orange-600">User Profile</h1>

                    <div className="p-4 mb-6 rounded-lg bg-gray-50">
                        <p className="text-lg font-medium text-gray-800">
                            Name: <span className="text-orange-600">Jane Doe</span>
                        </p>
                        <p className="mt-2 text-lg font-medium text-gray-800">
                            Age: <span className="text-orange-600">{user.age}</span>
                        </p>
                        <p className="mt-2 text-lg font-medium text-gray-800">
                            Location: <span className="text-orange-600">New York</span>
                        </p>
                    </div>

                    <div className="flex justify-between">
                        <button onClick={handleUpdate} className="w-full px-4 py-2 font-medium text-white transition-colors duration-300 bg-orange-500 rounded-l-lg hover:bg-orange-600">
                            Update Profile
                        </button>
                        {/* <button className="w-full px-4 py-2 font-medium text-gray-800 transition-colors duration-300 bg-gray-300 rounded-r-lg hover:bg-gray-400">
                            Reset Profile
                        </button> */}
                    </div>
                </div>
                </div>
        </>
    )
}

export default Update;