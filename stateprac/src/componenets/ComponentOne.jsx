import React from 'react'

const ComponentOne = ({count, onClickHandler}) => {

    const handleClick = () => onClickHandler();
    return(
        <>
            <h2>Count : {count}</h2>
            <button onClick={handleClick}>Add One</button>
        </>
    )
}

export default ComponentOne;