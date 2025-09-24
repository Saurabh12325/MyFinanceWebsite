import React from "react";
import { useNavigate } from "react-router-dom";
import { ReactTyped } from "react-typed";

function Landing() {
  const navigate = useNavigate();
  const handleNavigate =()=>{
    navigate('/signup')
  }
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center bg-gradient-to-b from-black via-black to-emerald-500">
        <div className="text-white text-center text-5xl font-bold font-serif w-3/5 relative bottom-40">
          <ReactTyped
            strings={[
              "Welcome to MyFinance – your smart platform for financial growth and management.",
              "Track your expenses easily ",
              "Manage your budget smartly ",
              "Grow your wealth with confidence "
            ]}
            typeSpeed={80}
            backSpeed={30}
            loop
          />
          
        </div>
        <div className="absolute  backdrop-blur-sm bg-white/0 p-4 rounded-2xl border-2 hover:scale-105 duration-300  text-white text-2xl font-semibold cursor-pointer hover:bg-emerald-500 animate-bounce">
          <button
          onClick={handleNavigate}
           className="cursor-pointer shadow-2xl hover:text-black" >SignUp 
            
          </button>
        </div>
      </div>
    </>
  );
}

export default Landing;
