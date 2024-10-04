import React from 'react'

const ArrayComponent = () => {

    const userData = [
        {
            id: 1,
            name: "vihaan",
            post: "Developer",
            Salary: "1500$",
            location: "USA"
        },

        {
            id: 2,
            name: "Urvi",
            post: "SDE",
            Salary: "15000$",
            location: "USA, California"
        },

        {
            id: 3,
            name: "Jonn",
            post: "Front End Developer",
            Salary: "1000$",
            location: "USA"
        },

        {
            id: 4,
            name: "Urssera Corbero",
            post: "UI Designer",
            Salary: "1300$",
            location: "Spain"
        },

        {
            id: 5,
            name: "Brao Wills",
            post: "SDE",
            Salary: "15000Euro",
            location: "Europe, Amsterdamn"
        },

        {
            id: 6,
            name: "Steve",
            post: "UX Desinger",
            Salary: "1500AU",
            location: "Australia"
        }
    ];

    return(
        <>
        {userData.map(({id, name, post, Salary, location},index) => (
            <ul key={id || index}>
                <li>ID: {id}</li>
                <li>Name: {name}</li>
                <li>Post: {post}</li>
                <li>Salary: {Salary}</li>
                <li>location: {location}</li>
            </ul>
        ))}
        </>
    )

}

export default ArrayComponent;