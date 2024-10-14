import React, { useState } from "react";

const ShoppingCart = () => {

    const [cartItem, setCartItem] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [quantity, setQuantity] = useState(0)

    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim() && quantity > 0) {
            setCartItem([...cartItem, { name: inputValue, quantity: quantity }])
            setInputValue('');
            setQuantity(0);
        }

    }

    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleClick = () => {
        setQuantity(quantity + 1)
    }

    const decClck = () => {
        setQuantity((quantity) => quantity > 0 ? quantity - 1 : 0)
    }

    return (
        <>
            <h1>Shopping Cart</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={inputValue} onChange={handleChange} placeholder="Enter item Name"></input>
                <h2>Item Quantity: {quantity}</h2>
                <button onClick={handleClick}>+</button>
                <button onClick={decClck}>-</button>
                <button type="submit">Submit</button>
            </form>

            <ul>
                {cartItem.map((item, index) => (
                    <li key={index}>
                        Item Name: {item.name} - Quantity: {item.quantity}
                    </li>
                ))}
            </ul>
        </>
    )
}

export default ShoppingCart;