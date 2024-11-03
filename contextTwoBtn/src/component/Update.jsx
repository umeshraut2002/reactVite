import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const Update  = () => {
    const {user} = useContext(UserContext);

    if(!user){
        return <div><h2>PLease Enter Your Age</h2></div>
    }

    else{
        return <div><h2>Age : {user.age}</h2></div>
    }
}

export default Update;