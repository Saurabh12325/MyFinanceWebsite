import { createContext, useState } from "react";

 const AppContext = createContext();
 export const AppContextProvider = ({ children }) => {

    const[user, setUser] = useState(null);
    const constValue ={
        user,
        setUser
    }
    return (
        <AppContext.Provider value={constValue}>
            {children}  
        </AppContext.Provider>
    )
 }