import React, {useContext} from "react";
import { CountContext } from "../context/CountContext";

const Increament = () => {

    const {count, setCount} = useContext(CountContext)

    return(
        <>
            <h1>I Am Incrementar: {count}</h1>
            {/* <button>Increment</button> */}
        </>
    )
}

export default Increament;