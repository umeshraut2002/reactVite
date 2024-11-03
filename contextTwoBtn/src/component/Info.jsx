import React from 'react'
import { useState } from 'react';
import Show from './Show';

const Info = () => {

    const [name. setName] = useState("");
    const [surname, setSurname] = useState("");
    const [age, setAge] = useState(0);

    return(
        <>
            <div>
                <h2>Enter Your Information Here: </h2>
                <h2>Name : {name}</h2>
                <h2>Surname: {surname}</h2>
                <h2>Age: {age}</h2>
                <input 
                type='text'
                value={name}
                placeholder='Enter Your Name Here'
                />

                {" "}

                <input 
                type='text'
                value={surname}
                placeholder='Enter Your Surname Here'
                />

                {" "}

                <input 
                type='number'
                value={age}
                placeholder='Enter Your Age Here'
                />

                <button onClick={handleUpdate}>Update</button>
                {" "}
                <button onClick={handleReset}>Reset</button>
                {" "}
                <button onClick={Show}>Show</button>
                {" "}
            </div>
        </>
    )
}

export default Info;