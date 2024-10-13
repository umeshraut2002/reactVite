import React, { useState } from 'react'

const Friends = () => {
    const [frnd, setFrnd] = useState(["John", "Scarlet", "stevian"]);

    const handleClick = () =>{
        setFrnd([...frnd, "Umesh", "Vihaan"]);
    }

    const removeFrnd = () => {
        setFrnd(frnd.filter(f => f !== "Umesh"))
    }

    const updateFrnd = () =>{
        setFrnd(frnd.map(f => f === "Umesh" ? "Umesh raut" : f))
    }

    return(
        <div>
            {frnd.map(f => (
                <li key={Math.random()}>{f}</li>
            ))} 

            <button onClick={handleClick}>Add New Friends</button>
            <button onClick={removeFrnd}>Remove Friend</button>
            <button onClick={updateFrnd}>Update</button>
        </div>
    )
}

export default Friends;