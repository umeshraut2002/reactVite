import React, { useState } from "react";

const Counter = () => {

    const [count, setCount] = useState(0);

    const handleCounter = () => {
        setCount(count + Math.floor(Math.random() * 2) + 1);
    }

    const decreaseCount = () => {
        if(count < 0){
            return count;
        }

        setCount(count - 1)
    }

    return (
        <>
            <h1>Count: {count}</h1>
            <button onClick={handleCounter}>Add Count</button>
            <button onClick={decreaseCount}>Subtract</button>
        </>
    )
}

export default Counter;