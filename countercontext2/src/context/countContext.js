import {createContext, useContext} from "react";

export const CountContext = createContext();

export const CountProvider = CountContext.Provider

export default function useCont(){
    return useContext(CountContext);
}
