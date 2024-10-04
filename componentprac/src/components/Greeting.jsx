import React from "react";

const Greeting = () => {

    const name = "Umesh";
    let dates = new Date();    
    return(

        <div>
        <h1>MY Name Is: {name}</h1>
        <p>Today Date: {dates.getDate()}</p>
        <h2>Current Time: {dates.getHours()}:{dates.getMinutes()}</h2>
        </div>
    )
}

export default Greeting;