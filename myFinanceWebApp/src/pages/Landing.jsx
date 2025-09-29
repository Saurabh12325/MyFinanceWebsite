import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ReactTyped } from "react-typed";
import { AppContext } from "../Context/AppContext";
import { FaThemeco, FaToggleOn } from "react-icons/fa";
import { Moon, MoonIcon, Sun, ToggleLeft, ToggleLeftIcon, ToggleRightIcon } from "lucide-react";

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
     
      <div className={`w-full h-screen flex justify-center items-center ${theme === 'dark' ? 'bg-gradient-to-b from-white via-white to-emerald-600 text-black ' : 'bg-gradient-to-b from-black via-black to-emerald-500 text-white'}`}>
         <div className="absolute top-10 right-5">
           <button
            onClick={toggleTheme}
            className={`backdrop-blur-sm mx-5  p-4 rounded-2xl border-2 hover:scale-105 duration-300 text-2xl font-semibold cursor-pointer ${theme === 'dark' ? 'bg-emerald-600 text-white  font-bold hover:text-black' : ' bg-black'} `}
          >
            {theme === 'dark' ? <MoonIcon /> : <Sun />}
          </button>
        </div>
        <div className=" text-center font-bold font-serif  relative bottom-40  max-md:p-5   ">
              <h1 className="text-7xl max-md:text-3xl mb-10">Welcome to MyFinance</h1>
          <ReactTyped
          className="text-3xl max-md:text-xl"
            strings={[
              "Your smart platform for financial growth and management.",
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
          
        <div className={` backdrop-blur-sm mx-5   p-4 rounded-2xl border-2 hover:scale-105 duration-300   text-2xl font-semibold cursor-pointer  animate-bounce ${theme === 'dark'? 'bg-emerald-600 text-white':'bg-white/0'}`}>
          <button
          onClick={handleNavigate}
           className="cursor-pointer shadow-2xl " >SignUp 
            
          </button>
        </div>
         <div className={` backdrop-blur-sm mx-5   p-4 rounded-2xl border-2 hover:scale-105 duration-300   text-2xl font-semibold cursor-pointer  animate-bounce ${theme === 'dark'? 'bg-emerald-600 text-white':'bg-white/0'}`}>
          <button
          onClick={handleLogin}
           className="cursor-pointer shadow-2xl" >Login
            
          </button>
        </div>
        
        </div>
      
      </div>
      
    </>
  );
}

export default Landing;
