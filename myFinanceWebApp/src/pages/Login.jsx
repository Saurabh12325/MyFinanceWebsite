import React from 'react'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from './Input';

 const navigate = useNavigate();
function Login() {

      const [fullName, setFullName] = useState("");
      const [email, setEmail] = useState("");
      const [password, SetPassword] = useState("");
    return (
       <div className="h-screen w-full relative flex items-center justify-center overflow-hidden bg-black">
           <div className='relative z-10 w-full max-w-lg px-6'>
                 <div>
                    <h3 className="text-2xl font-semibold mb-4 text-center">Welcome Back</h3>
                      <p className=''>Login to your account</p>
                 </div>
           </div>
       </div>
    )
}

export default Login
