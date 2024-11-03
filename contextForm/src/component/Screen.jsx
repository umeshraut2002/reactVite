import React from 'react'
import {UserContext} from '../context/UserContext'
import { useContext } from 'react';

const Screen = () => {
    const {user} = useContext(UserContext);

    if(!user){
        return <div><h2>Please Enter Detail</h2></div>
    }
    else{
        return <div><h2>Welcome : {user.name} {user.surname}</h2></div>
    }
}

export default Screen;