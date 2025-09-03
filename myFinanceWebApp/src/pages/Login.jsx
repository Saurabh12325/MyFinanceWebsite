import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/asset.js";
import Input from "./Input.jsx";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); 
  const [error, setError] = useState(null);

  const navigate = useNavigate();
    const handleSubmit = async (e) => {
    e.preventDefault();
   }

   if(!email.endsWith("@gmail.com") || !/^[A-Za-z0-9 ]$/.match(email)){
    setError("Email is required");
    return;
   }
   if(password.trim().length < 6 || !password.includes("@")){
    setError("Password must be at least 6 characters long");
    return;
   }
  return (
    <div className="h-screen w-full relative flex items-center justify-center overflow-hidden bg-black">
      <img
        src={assets.bg}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover backdrop-blur-sm opacity-60"
      />
      <div className="relative z-10 w-full max-w-lg px-6">
        <div className="bg-white rounded-lg shadow-lg p-4">
          <h3 className="text-2xl font-semibold mb-4 text-center">
            Login Yourself
          </h3>
          <p className="text-sm font-semibold text-center text-slate-700 mb-8">
            Start tracking your spendings by joining with us.
          </p>
          <form  onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
             <div className="col-span-2">
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                label="Email"
                placeholder="name@example.com"
                type="text"
              />
              </div>
              <div className="col-span-2">
                <Input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  label="Password"
                  placeholder="************"
                  type="password" 
                />
              </div>
            </div>
            {error && (
              <p className="text-red-800 text-sm text-center bg-red-50">
                {error}
              </p>
            )}
            <button
              className="bg-slate-900 rounded-2xl w-full py-3 text-lg text-white font-medium cursor-pointer hover:bg-blue-500 "
              type="submit"
            >
              Login
            </button>
            <p className="text-sm text-slate-800 text-center mt-6">
              Does't have an Account ?{" "}
              <span
                onClick={() => navigate("/signUp")}
                className=" text-black font-bold underline hover:text-primary-dark transition-colors cursor-pointer"
              >
                SignUp
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
