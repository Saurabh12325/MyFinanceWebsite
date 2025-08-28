import React from 'react'
import { BrowserRouter, Route ,Routes } from 'react-router-dom'
import Home from './pages/Home'
import Inome from './pages/Income'
import Expense from './pages/Expense'
import Filter from './pages/Filter'
import Login from './pages/Login'
import Category from './pages/Category'
import SignUp from './pages/SignUp'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/dashboard" element={<Home/>} />
      <Route path="/income" element={<Inome/>} />
      <Route path="/expense" element={<Expense/>} />
      <Route path="/Filter" element={<Filter/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signUp" element={<SignUp/>} />
      <Route path="/category" element={<Category/>} /> 
    </Routes>
    </BrowserRouter>
  )
}

export default App
