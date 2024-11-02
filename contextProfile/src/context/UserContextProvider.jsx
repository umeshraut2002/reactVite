import React, {useState} from 'react';
import { UserContext } from './UserContext';

const UserContextProvider = ({children}) => {
    return(
        <>
            <UserContext.Provider value={{user, setUser}} >
                {children}
            </UserContext.Provider>
        </>
    )
}

export default UserContextProvider;