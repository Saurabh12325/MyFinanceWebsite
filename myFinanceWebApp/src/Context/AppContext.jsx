import { createContext, useState } from "react";

export const AppContext = createContext();
 export const AppContextProvider = ({ children }) => {

    const[user, setUser] = useState(null);
    const clearUSer = ()=>{
        setUser(null)
    }
    const constValue ={
        user,
        setUser,
        clearUSer
    }
    return (
        <AppContext.Provider value={constValue}>
            {children}  
        </AppContext.Provider>
    )
 }
//  sf