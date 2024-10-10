import React from "react";

const Weather = ({tempreture}) => {
    if(tempreture < 15){
        return <h1>Its cold outside 🌨🌨</h1>
    }
    else if(tempreture > 15 && tempreture < 25){
        return <h1>Its Nice outside! 😀😀</h1>
    }
    else if(tempreture > 25){
        return <h1>Its hot outside 🔥🔥</h1>
    }
}

export default Weather;