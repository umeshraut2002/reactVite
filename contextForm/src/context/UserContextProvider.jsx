import { useContext } from "react";
import { UserContext } from "./UserContext";

const UserContextProvider = ({children}) => {
    <UserContext.Provider value={{}}>
        {children}
    </UserContext.Provider>
}

export default UserContextProvider;