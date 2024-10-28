import React from "react";

const Login = () => {

    const handleSubmit = () => {

    }

    return (
        <>
            <div className="px-10 py-10 mx-auto">
                <h1>log in</h1>
                <input className="gap-2 mt-5 ml-4 mr-4" type="text" placeholder="@username" ></input>
                <input className="gap-2 mt-5 ml-4 mr-4" type="text" placeholder="Password" ></input>
                <button onClick={handleSubmit} >Submit</button>
            </div>
        </>
    )
}

export default Login;