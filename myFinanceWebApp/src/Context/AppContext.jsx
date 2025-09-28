import { createContext, useState } from "react";

export const AppContext = createContext();
 export const AppContextProvider = ({ children }) => {

    const[user, setUser] = useState(null);
     const [theme, setTheme] = useState('light');
    const clearUSer = ()=>{
        setUser(null)
    }
      const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };
    const constValue ={
        user,
        setUser,
        clearUSer,
         theme, 
    toggleTheme
    }
    return (
        <AppContext.Provider value={constValue}>
            {children}  
        </AppContext.Provider>
    )
 }
