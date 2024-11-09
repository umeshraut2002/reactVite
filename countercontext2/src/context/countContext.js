import {createContext, useContext} from "react";

export const countContext = createContext(0);

export const contextProvider = countContext.Provider

export default function useCont(){
    return useContext(countContext);
}
