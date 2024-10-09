import React from "react";

const Product = () => {
    return (
        <>
            <Info 
                img="https://m.media-amazon.com/images/I/711lqT8hoCL._AC_UY218_.jpg"
                name="Laptop"
                price={12000}
                quantity={1}
                statu={true}
            />
        </>
    )
}

const Info = (Info) => {
    return (
        <>
            <img src={Info.img} alt={Info.name}></img>
            <h2>Name : {Info.name}</h2>
            <h2>Price : {Info.price}</h2>
            <h2>Quantity : {Info.quantity}</h2>
            <h2>In Stock : {Info.statu}</h2>
        </>
    )
}

export default Product