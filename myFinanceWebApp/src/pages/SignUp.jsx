import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/asset.js";
import Input from "./Input.jsx";
import { Eye, EyeOff } from "lucide-react";

function SignUp() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, SetPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  return (
    <div className="h-screen w-full relative flex items-center justify-center overflow-hidden bg-black">
      
      <img
        src={assets.bg}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover backdrop-blur-sm opacity-60"
      />
      <div className="relative z-10 w-full max-w-lg px-6">
         <div className="bg-white  rounded-lg shadow-lg p-4">
            <h3 className="text-2xl font-semibold mb-4 text-center">Create An Account </h3>
              <p className="text-sm font-semibold text-center text-slate-700 mb-8 ">Start tracking your spendings by joining with us.</p>
               <form className="space-y-4">
                  <div className="flex justify-center mb-6">

                  </div>
                 <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
                      <Input
                         value={fullName}
                         onChange={(e)=>setFullName(e.target.value)}
                         label="Full Name"
                          placeholder="John Doe"
                          type="text"
                      />
                      <Input
                         value={email}
                         onChange={(e)=>setEmail(e.target.value)}
                         label="Email"
                          placeholder="name@example.com"
                          type="text"
                      />
                    <div className="col-span-2">
                        <Input
                         value={password}
                         onChange={(e)=>SetPassword(e.target.value)}
                         label="Password"
                          placeholder="************"
                          type="text"
                      />
                    </div>

                 </div>
                 {
                  error && <p className="text-red-800 text-sm text-center bg-red-50">{error}</p>
                 }
                 <button className="bg-slate-900 rounded-2xl w-full py-3 text-lg text-white font-medium" type="submit">
                    Sign Up
                 </button>
                  <p className="text-sm  text-slate-800 text-center mt-6">Already have an account? 
                    <span onClick={()=>navigate('/login')} className="font-medium text-primary underline hover:text-primary-dark transition-colors cursor-pointer">Login</span> </p>
                  </form>
         </div>
      </div>
    </div>
  );
}

export default SignUp;
