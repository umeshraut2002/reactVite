import React from 'react'
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const Reset = () => {
    const {user} = useContext(UserContext);

    if(!user){
        return <div><h2>Please Enter All Info</h2></div>
    }
    else{
        return <div><h2>Name: {user.name} Surname: {user.surname} Age: {user.age}</h2></div>
    }
}

export default Reset;