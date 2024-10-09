import React from "react";

const Infos = () => {
    return (
        <>
         <User2 
            img="https://avatars.githubusercontent.com/u/85052811?v=4"
            name="Jonas"
            age={29}
            location="USA"
         />
        </>
    )
}

const User2 = ({img,name, age, location}) => {
    return (
        <>
        <img src={img} className="items-center bg-cover w-50 h-50 rounded-xl"></img>
        <h2>Name : {name}</h2>
        <h2>Age : {age}</h2>
        <h2>Location : {location}</h2>
        </>
    )
}

export default Infos