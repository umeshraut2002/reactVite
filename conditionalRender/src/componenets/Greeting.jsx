import React from "react";

const Greeting = ({timeOfDay}) => {
    return(
    timeOfDay ? <h1>Good morning</h1> : <h1>Good Afternoon</h1>
    )
}

export default Greeting;
