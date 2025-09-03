import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
 // import { assets } from "../assets/asset.js";
import Input from "./Input.jsx";
import { validateEmail } from "../util/Validation.js";
import axiosConfig from "../util/axiosConfig.jsx";
import { API_ENDPOINTS } from "../util/apiEndPoint.js";
import toast, { LoaderIcon } from "react-hot-toast";
import { BASE_URL } from "../util/apiEndPoint.js";

function SignUp() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); 
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
   const handleSumit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if(!fullName.trim()){
    setError("FullName is required");
     setIsLoading(false);
    return;
   }
 
   if(!validateEmail(email)){
    setError("Email is not valid");
    setIsLoading(false);
    return;
   }
   
      setError(null);
      try{
        const response = await axiosConfig.post(`${BASE_URL}${API_ENDPOINTS.REGISTER}`, {
          fullName,
          email,
          password  

        })
          
        if(response.status === 201){
          toast.success("User Registered Successfully");
          navigate("/login");
        }
         
      }catch(err){
        console.log("Something went wrong", err);
        setError(err.response?.data?.message || "Something went wrong, Please try again later");  
      }
      finally{
        setIsLoading(false);
      }
   }
  
  

  return (
    <div className="h-screen w-full relative flex items-center justify-center overflow-hidden bg-black">
      {/* <img
        src={assets.bg}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover backdrop-blur-sm opacity-60"
      /> */}
      <div className="absolute inset-0 w-full h-full object-cover backdrop-blur-sm opacity-70 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 "></div>
      <div className="relative z-10 w-full max-w-lg px-6">
        <div className="bg-white rounded-lg shadow-lg p-4">
          <h3 className="text-2xl font-semibold mb-4 text-center">
            Create An Account
          </h3>
          <p className="text-sm font-semibold text-center text-slate-700 mb-8">
            Start tracking your spendings by joining with us.
          </p>
          <form  onSubmit={handleSumit} className="space-y-4">
            <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
              <Input
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                label="Full Name"
                placeholder="John Doe"
                type="text"
              />
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                label="Email"
                placeholder="name@example.com"
                type="text"
              />
              <div className="col-span-2">
                <Input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  label="Password"
                  placeholder= "*****************"
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
              disabled={isLoading}
              className="bg-slate-900 rounded-2xl w-full py-3 text-lg text-white font-medium cursor-pointer hover:bg-blue-500 "
              type="submit"
            >  
              {isLoading ? ( <LoaderIcon className="w-5 h-5 text-white mx animate-spin"/> ) : "SignUp" }

            </button>
            <p  className="text-sm text-slate-800 text-center mt-6">
                Already have an account?{" "}
              <span
                onClick={() => navigate("/login")}
                className="text-black font-bold underline hover:text-primary-dark transition-colors cursor-pointer"
              >
                Login
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
