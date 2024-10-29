import React, {useState,useContext} from "react";
import { CountContext } from "../context/CountContext";

const Increament = () => {

    const {count, setCount} = useContext(CountContext)

    const handleBtn = () => {
        setCount(count+1)
    }

    return(
        <>
            <h1>I Am Incrementar: {count}</h1>
            <button onClick={handleBtn}>Increment</button>
        </>
    )
}

export default Increament;