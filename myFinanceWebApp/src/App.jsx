import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Inome from './pages/Income.jsx'
import Expense from './pages/Expense.jsx'
import Filter from './pages/Filter.jsx'
import Login from './pages/Login.jsx'
import Category from './pages/Category.jsx'
import SignUp from './pages/SignUp.jsx'
import { Toaster } from "react-hot-toast";

import Landing from './pages/Landing.jsx'
import SplashScreen from './pages/SplashScreen.jsx'
import { useEffect } from 'react'

function App() {
  const [isLoaded, setIsLoaded] = React.useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <Toaster />
      <BrowserRouter>
      {isLoaded ? (
        <>
        <div className="">
          <Routes>
            <Route path='/' element={<Landing/>} />
            <Route path='/root' element={<Root/>}/>
            <Route path="/dashboard" element={<Home/>} />
            <Route path="/income" element={<Inome/>} />
            <Route path="/expense" element={<Expense />} />
            <Route path="/filter" element={<Filter />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/category" element={<Category />} />
          </Routes>
        </div>
        </>
        ) : (
       <SplashScreen/>
       )}
      </BrowserRouter>
    </>
  )
}

const Root = () =>{
  const isAuthenticated = !!localStorage.getItem("token");
  return isAuthenticated?(
    <Navigate to="/dashboard"/>
  ):(
    <Navigate to="/login"/>
  )
}

export default App
