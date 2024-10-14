import React, { useState } from 'react';

const Atodolist = () => {
    
    const [todo, setTodo] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if(inputValue.trim()){
            setTodo([...todo, inputValue]);
            setInputValue('');
        }
    }

    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

    return (
        <>
            <h1>A TO DO LIST</h1>
            <form onSubmit={handleSubmit}>
                <input type='text' value={inputValue} onChange={handleChange} placeholder='Enter Your to do...'></input>
                <button type='submit'>submit</button>
            </form>

            <ul>
                {todo.map((item, index) => (
                    <li key={index}>{todo}</li>
                ))}
            </ul>
        </>
    )
}


export default Atodolist;