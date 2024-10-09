import React from 'react'

const Product = (prop) => {
    return (
        <>
            <img src={prop.src}></img>
            <h2>{prop.name}</h2>
            <h2>{prop.price}</h2>

        </>
    )
}

export default Product;