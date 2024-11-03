import React  from "react";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Show = () => {
    const {user} = useContext(UserContext);

    if(!user){
        return <div><h2>PLease Enter all Details </h2></div>
    }
    else{
        return <div><h2>Name: {user.name} Username: {user.surname} Age: {user.age}</h2></div>
    }
}

export default Show;