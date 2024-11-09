import React from 'react';
import useCont from '../context/countContext';

const Counter1 = () => {

    const {count, setCount} = useCont();

    return(
        <>
        <div>
            <h2>Counte is : {count * 2}</h2>
        </div>
        </>
    )
}

export default Counter1;