import React from "react";
import { useState } from "react";
import UserContext from "../../../contextLogIn/src/context/UserContext";
import { useContext } from "react";

const Detail = () => {

    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const {setUser} = useContext(UserContext);

    return(
        <>
        <div>
            <div>
                <input
                type="text"
                value={name}
                placeholder="Enter Your Name"
                onChange={(e) => setName(e.target.value)}
                 />

                 <input 
                 type="text"
                 value={surname}
                 placeholder="Enter Your Surname"
                 onChange={(e) => setSurname(e.target.value)}
            </div>
            <button>Submit</button>
        </div>
        </>
    )
}

export default Screen;