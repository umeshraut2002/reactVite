import React, {useState, useContext} from "react";
import UserContext from "../../context/UserContext";


const Login = () => {

    const [username, setUsername] = useState([]);
    const [password, setPassword] = useState([]);
    
    const {setUser} = useContext(UserContext)
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({username, password})
    }

    return (
        <>
            <div className="px-10 py-10 mx-auto">
                <h1>log in</h1>
                <input 
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)} 
                placeholder="@username" />
                
                {" "}
                
                <input 
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)} 
                placeholder="Password" 
                />
            </div>
            <button onClick={handleSubmit} >Submit</button>
        </>
    )
}

export default Login;