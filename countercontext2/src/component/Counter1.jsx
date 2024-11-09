import React from 'react';
import useCont from '../context/countContext';

const Counter1 = () => {

    const {count, setCount} = useCont();

    const counter = () => {
        setCount(count * 2)
    }

    return(
        <>
        <div>
            <h2>Counte is : {counter}</h2>
        </div>
        </>
    )
}

export default Counter1;