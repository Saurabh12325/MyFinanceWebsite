import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ReactTyped } from "react-typed";
import { AppContext } from "../Context/AppContext";
import { FaThemeco, FaToggleOn } from "react-icons/fa";
import { Moon, ToggleLeft, ToggleLeftIcon, ToggleRightIcon } from "lucide-react";

function Landing() {
  const navigate = useNavigate();
   const { theme, toggleTheme } = useContext(AppContext);
  const handleNavigate =()=>{
    navigate('/signup')
  }
    const handleLogin =()=>{
    navigate('/login')
  }
  return (
    <>
     
      <div className={`w-full h-screen flex justify-center items-center ${theme === 'dark' ? 'bg-black text-white' : 'bg-gradient-to-b from-black via-black to-emerald-500 text-white'}`}>
         <div className="absolute top-10 right-5">
           <button
            onClick={toggleTheme}
            className="backdrop-blur-sm mx-5 bg-white/0 p-4 rounded-2xl border-2 hover:scale-105 duration-300 text-2xl font-semibold cursor-pointer hover:bg-emerald-500 "
          >
            <Moon/>
          </button>
        </div>
        <div className="text-white text-center text-5xl font-bold font-serif w-3/ relative bottom-40 max-md:text-3xl max-md:p-4   ">
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
          <div className="absolute p-4 flex justify-center items-center">
          
        <div className=" backdrop-blur-sm mx-5 bg-white/0 p-4 rounded-2xl border-2 hover:scale-105 duration-300  text-white text-2xl font-semibold cursor-pointer hover:bg-emerald-500 animate-bounce">
          <button
          onClick={handleNavigate}
           className="cursor-pointer shadow-2xl hover:text-black" >SignUp 
            
          </button>
        </div>
         <div className=" backdrop-blur-sm bg-white/0 p-4 rounded-2xl border-2 hover:scale-105 duration-300  text-white text-2xl font-semibold cursor-pointer hover:bg-emerald-500 animate-bounce">
          <button
          onClick={handleLogin}
           className="cursor-pointer shadow-2xl hover:text-black" >Login
            
          </button>
        </div>
        
        </div>
      
      </div>
      
    </>
  );
}

export default Landing;
