import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Inome from './pages/Income.jsx'
import Expense from './pages/Expense.jsx'
import Filter from './pages/Filter.jsx'
import Login from './pages/Login.jsx'
import Category from './pages/Category.jsx'
import SignUp from './pages/SignUp.jsx'
import { Toaster } from "react-hot-toast";
import Nav from './pages/Nav.jsx'
import Landing from './pages/Landing.jsx'

function App() {
  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Nav /> 
        
        <div className="">
          <Routes>
            <Route path='/' element={<Landing/>} />
            <Route path="/dashboard" element={<Home />} />
            <Route path="/income" element={<Inome />} />
            <Route path="/expense" element={<Expense />} />
            <Route path="/filter" element={<Filter />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/category" element={<Category />} />
          </Routes>
        </div>
      
      </BrowserRouter>
    </>
  )
}

export default App
