import React from "react";

const Login = () => {

    const handleSubmit = () => {

    }

    return (
        <>
            <div>
                <h1>log in</h1>
                <input type="text" placeholder="@username" ></input>
                <input type="text" placeholder="Password" ></input>
                <button onClick={handleSubmit} >Submit</button>
            </div>
        </>
    )
}

export default Login;