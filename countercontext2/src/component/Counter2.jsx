import Reaact from 'react'
import useCont from '../context/countContext';

const Counter2 = () => {

    const {count, setCount} = useCont();

    return(
        <>
        <div>
            <h2>Counter 2 is X 4: {count * 4}</h2>
        </div>
        </>
    )
}

export default Counter2;