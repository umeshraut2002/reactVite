
import React,{useState, useContext} from "react";
import { UserContext } from "../context/UserContext";

const Profile = () => {

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [location, setLoacation] = useState('');

    const {user, setUser} = useContext(UserContext);
    return(
        <>
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-orange-600 text-center mb-4">User Profile</h1>
        
        <div className="bg-gray-50 p-4 rounded-lg mb-6">
          <p className="text-lg font-medium text-gray-800">
            Name: <span className="text-orange-600">Jane Doe</span>
          </p>
          <p className="text-lg font-medium text-gray-800 mt-2">
            Age: <span className="text-orange-600">30</span>
          </p>
          <p className="text-lg font-medium text-gray-800 mt-2">
            Location: <span className="text-orange-600">New York</span>
          </p>
        </div>
        </div>
        </div>
        </>
    )
}

export default Profile;