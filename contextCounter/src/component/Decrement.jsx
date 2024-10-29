import React, {useState,useContext} from 'react';
import { CountContext } from "../context/CountContext";

const Decrement = () => {
    const {count, setCount} = useContext(CountContext);

    
    return(
        <>
            <h1>I am Decrementar : {count-1}</h1>
            {/* <button onClick={setCount(count-1)}>Decrement</button> */}
        </>
    )
}

export default Decrement;