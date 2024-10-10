import React from 'react'

const Random = () => {
    const number = Math.floor(Math.Random() * 100 ) + 1;
    return number;   
}

export default Random;