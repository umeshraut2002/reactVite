import React, { useState } from "react";

const ShoppingCart = () => {

    const [cartItem, setCartItem] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [quntity, setQuantity] = useState(0)

    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim()) {
            setCartItem([...cartItem, inputValue])
            setInputValue('');
        }

    }

    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleClick = () => {
        setQuantity(quntity + 1)
    }

    const decClck = () => {
        setQuantity(() => {
            if (quntity <= 0) {
                return quntity;
            }
            else {
                return quntity - 1;
            }
        })
    }

    return (
        <>
            <h1>Shopping Cart </h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={inputValue} onChange={handleChange} placeholder="Enter item Name"></input>
                <h2>Item Quantity: {quntity}</h2>
                <button onClick={handleClick}>+</button>
                <button onClick={decClck}>-</button>
                <button type="submit">Submit</button>
            </form>

            <ul>
                {cartItem.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>


        </>
    )
}

export default ShoppingCart;