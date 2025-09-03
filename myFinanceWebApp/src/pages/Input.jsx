import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Input = ({ label, value, onChange, placeholder, type }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="mb-4">
      <label className="text text-slate-800 block mb-1">{label}</label>
      <div className="relative">
        <input
          className="w-full bg-transparent outline-none border border-gray-300 rounded-md py-2 px-3 pr-10 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 leading-tight focus:outline-none"
          type={
            type === "password" ? (showPassword ? "text" : "password") : type
          }
          // type={`${showPassword ? "text" : "password"}`}
          value={value}
          onChange={(e) => onChange(e)}
          placeholder={placeholder}
        />
        {type === "password" && (
          <span className="absolute right-3 translate-y-1/2 top-1 cursor-pointer text-gray-900">
            {showPassword ? (
              <FaEyeSlash
                size={20}
                onClick={togglePasswordVisibility}
                className="text-black"
              />
            ) : (
              <FaEye
                size={20}
                onClick={togglePasswordVisibility}
                className="text-primary"
              />
            )}
          </span>
        )}
      </div>
    </div>
  );
};

export default Input;
