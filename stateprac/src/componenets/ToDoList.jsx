import React, { useState } from 'react'

const ToDoList = () =>{

    const [todo, setTodo] = useState(["dsa", "development", "project"]);

    const addTask = () => {
        setTodo([...todo, "Javascript", "Math"]);
    }

    const removeTask = () => {
        setTodo(todo.filter(f => f !== "Javascript"));
    }

    const updateTask = () => {
        setTodo(todo.map(f => f === "dsa" ? "data structure and algorithm" : f))
    }

    return(
        <>
        <h1>TO DO LIST </h1>
        {
            todo.map(f => (
                <li key={Math.random}>{f}</li>
            ))
        }

        <button onClick={addTask} >Add</button>
        <button onClick={removeTask} >Remove</button>
        <button onClick={updateTask} >Update</button>
        </>
    )
}

export default ToDoList;