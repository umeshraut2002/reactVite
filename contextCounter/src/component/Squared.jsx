import React,{useContext} from 'react';
import { CountContext } from '../context/CountContext';

const Squared = () => {
    const {count, setCount} = useContext(CountContext)


    return(
        <>
            <h1>I Am Squared: {count * count}</h1>
        </>
    )
}

export default Squared;