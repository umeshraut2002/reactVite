import React from 'react'
import { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const Info = () => {

    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [age, setAge] = useState(0);

    const {setUser} = useContext(UserContext);

    const handleUpdate = (e) => {
        e.preventDefault();

        if(age){
            setUser({age, setAge});
        }
    }

    const handleReset = (e) => {
        e.preventDefault();

        if(name && surname && age){
            setUser({name, setName, surname, setSurname, age, setAge});
        }
    }

    const handleShow = (e) => {
        e.preventDefault();

        if(name && surname && age){
            setUser({name, setName, surname, setSurname, age, setAge})
        }
    }

    return(
        <>
            <div>
                <h2>Enter Your Information Here: </h2>
                <h2>Name : {name}</h2>
                <h2>Surname: {surname}</h2>
                <h2>Age: {age}</h2>
                {""}
                <input 
                type='text'
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder='Enter Your Name Here'
                />

                {" "}

                <input 
                type='text'
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
                placeholder='Enter Your Surname Here'
                />

                {" "}

                <input 
                type='number'
                value={age}
                placeholder='Enter Your Age Here'
                onChange={(e) => setAge(e.target.value)}
                />

                <button onClick={handleUpdate}>Update</button>
                {" "}
                <button onClick={handleReset}>Reset</button>
                {" "}
                <button onClick={handleShow}>Show</button>
                {" "}
            </div>
        </>
    )
}

export default Info;