import React from "react";
import { ReactTyped } from "react-typed";

function Landing() {
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center bg-gradient-to-b from-black via-black to-emerald-400">
        <div className="text-white text-center text-4xl font-bold w-3/4 relative bottom-5">
          <ReactTyped
            strings={[
              "Welcome to MyFinance – your smart platform for financial growth and management.",
              "Track your expenses easily 💰",
              "Manage your budget smartly 📊",
              "Grow your wealth with confidence 🚀"
            ]}
            typeSpeed={50}
            backSpeed={30}
            loop
          />
        </div>
      </div>
    </>
  );
}

export default Landing;
