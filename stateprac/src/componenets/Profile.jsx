import React, { useState } from "react";

const Profile = () =>{

    const [profile, setProfile] = useState({
        name: '',
        age: 0
    });

    const [name, setName] = useState("");
    const [age, setAge] =useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        setProfile([...profile, {name: name, age : age}])
        setName('');
        setAge(0);
    }

    return(
        <>
        <div>
        <h1>Profile Information</h1>
        <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={setName(e => e.target.value)} placeholder="Enter Name Here" ></input>
        <button type="submit">Submit</button>
        </form>
        </div>

        <div>
        <form onSubmit={handleSubmit}>
            <input type="number" value={age} onChange={setAge(e.target.value)} placeholder="Enter Age Here" ></input>
            <button type="submit">Submit</button>
        </form>
        </div>

        <div>
        <h3>Information</h3>
        {profile.map((item, index) => (
            <li key={index}>
                Name: {item.name}
                Age: {item.age}
            </li>
        ))}
        </div>
        </>
    )
}

export default Profile;