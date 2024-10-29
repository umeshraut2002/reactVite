import React, {useState,useContext} from 'react';
import { CountContext } from "../context/CountContext";

const Decrement = () => {
    const {count, setCount} = useContext(CountContext);

    const handleBn = () =>{
        setCount(count-1)
    }
    
    return(
        <>
            <h1>I am Decrementar : {count}</h1>
            <button onClick={handleBn}>Decrement</button>
        </>
    )
}

export default Decrement;