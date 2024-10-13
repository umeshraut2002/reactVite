import React from "react";

const ComponentTwo = ({count, onClickHandler}) => {

    const handleClickFun = () => onClickHandler();

    return(
        <>
        <h2>count : {count}</h2>
        <button onClick={handleClickFun}>Add Two</button>
        </>
    )
}

export default ComponentTwo;