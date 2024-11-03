import React from 'react'

const Info = () => {
    return(
        <>
            <div>
                <h2>Enter Your Information Here: </h2>
                <h2>Name : {}</h2>
                <h2>Username: {}</h2>
                <h2>Age: {}</h2>
                <input 
                type='text'
                // value={}
                placeholder='Enter Your Name Here'
                />

                {" "}

                <input 
                type='text'
                // value={}
                placeholder='Enter Your Surname Here'
                />

                {" "}

                <input 
                type='number'
                // value={}
                placeholder='Enter Your Age Here'
                />

                <button>Update</button>
                {" "}
                <button>Reset</button>
                {" "}
                <button>Info</button>
                {" "}
            </div>
        </>
    )
}

export default Info;