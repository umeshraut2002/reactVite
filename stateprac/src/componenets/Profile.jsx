import React, { useState } from "react";

const Profile = () =>{

    const [profile, setProfile] = useState({
        name: "Umesh",
        age: 0
    });

    const [name, setName] = useState("");
    const [age, setAge] =useState(0);

    return(
        <>
        <h1>Profile Information</h1>
        <form onSubmit={handleSubmit}>
        <input type="text" value={setName} onChange={handleOnChange} placeholder="Enter Name Here" ></input>
        <button type="submit">Submit</button>
        </form>

        <form onSubmit={handleSubmit} >
            <input type="number" value={setAge} onChange={handleChange} placeholder="Enter Age Here" ></input>
            <button type="submit">Submit</button>
        </form>

        <h3>Information</h3>
        {profile.map((item, index) => (
            <li key={index}>
                Name: {item.name}
                Age: {item.age}
            </li>
        ))}
        </>
    )
}

export default Profile;