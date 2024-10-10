import React from "react";

const UserStatus = ({isLoggedIn, isAdmin}) => {
    if(isLoggedIn && isAdmin){
        return <h1>Welcome Admin !</h1>
    }
    else if(isLoggedIn){
        return <h1>Welcome User!</h1>
    }
}

export default UserStatus;