import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/asset.js";

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
                      
                 </div>
                  </form>
         </div>
      </div>
    </div>
  );
}

export default SignUp;
