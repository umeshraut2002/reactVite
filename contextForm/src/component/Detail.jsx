import React, { useState, useContext} from "react";
import { UserContext } from "../context/UserContext";

const Detail = () => {

    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const {setUser} = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault();

        if(name && surname){
            setUser({name, surname});
        }

        // setUser({name, surname});
    }

    return(
        <>
            <div>
            <h2>Enter Your Details : </h2>
                <input
                type="text"
                value={name}
                placeholder="Enter Your Name"
                onChange={(e) => setName(e.target.value)}
                 />

                 {" "}

                 <input 
                 type="text"
                 value={surname}
                 placeholder="Enter Your Surname"
                 onChange={(e) => setSurname(e.target.value)} 
                 />
                 <button onClick={handleSubmit}>Submit</button>
            </div>
        </>
    )
}

export default Detail;