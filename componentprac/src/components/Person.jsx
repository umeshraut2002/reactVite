import React from 'react'

const Person = () => {
    return (
        <>
            <User 
                img="https://avatars.githubusercontent.com/u/143353687?v=4"
                name="Vihaan Raut"
                age={23}
                isMarried={false}
                hobbies={["coding ", " watching movies ", " Eating ", " Traveling "]}
            />
        </>
    )
}

const User = ({img, name, age, isMarried, hobbies}) => {
    return (
        <>
        <img src={img}></img>
        <h1>Name: {name}</h1>
        <h2>Age: {age}</h2>
        <h3>isMarried: {isMarried}</h3>
        <h4>Hobbies : {hobbies}</h4>
        </>
    )
}

export default Person;