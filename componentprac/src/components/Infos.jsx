import React from "react";

const Infos = () => {
    return (
        <>
         <User2 
            img=""
            name="Umesh",
            age={29}
            location="Nagpur"
         />
        </>
    )
}

const User2 = ({name, age, location}) => {
    return (
        <>
        <h2>Name : {name}</h2>
        <h2>Age : {age}</h2>
        <h2>Location : {location}</h2>
        </>
    )
}

export default Infos