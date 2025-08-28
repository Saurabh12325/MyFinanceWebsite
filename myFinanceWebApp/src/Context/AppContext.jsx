import { createContext } from "react";

 const AppContext = createContext();
 export const AppContextProvider = ({ children }) => {

    const[user, setUser] = useState(null);
    const constValue ={
        user


    }
    return (
        <AppContext.Provider value={constValue}>
            {children}  
        </AppContext.Provider>
    )
 }