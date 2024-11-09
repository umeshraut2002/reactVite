import {createContext, useContext} from "react";

export const countContext = createContext();

export const contextProvider = countContext.Provider

export default function useCont(){
    useContext(countContext);
}
