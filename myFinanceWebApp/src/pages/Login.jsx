import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/asset.js";
import Input from "./Input.jsx";
import { validateEmail } from "../util/Validation.js";
import { LoaderIcon } from "react-hot-toast";
import { API_ENDPOINTS } from "../util/apiEndPoint.js";
import axiosConfig from "../util/axiosConfig.jsx";
import { BASE_URL } from "../util/apiEndPoint.js";
import { AppContext } from "../Context/AppContext.jsx";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { setUser } = useContext(AppContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

   
    if (!validateEmail(email)) {
      setError("Email is not valid");
      return;
    }
    if (password.trim().length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    setIsLoading(true);
    try {
      const response = await axiosConfig.post(`${BASE_URL}${API_ENDPOINTS.LOGIN}`, {
        email,
        password,
      });

      const { token, user } = response.data;
      if (token) {
        localStorage.setItem("token", token);
        setUser(user);
        navigate("/dashboard");
      }
    } catch (err) {
      console.error("Login failed:", err);
      // More specific error handling
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message); // Use the error message from the server
      } else {
        setError("Login failed. Please check your credentials.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-screen w-full relative flex items-center justify-center overflow-hidden bg-gradient-to-t from-emerald-400 via-black to-black  flex-col md:flex-row divide-x-3 divide-white ">
      <div className="w-1/2 max-md:w-[200%]  flex justify-center items-center inset-0 ">
        {/* <img
          src={assets.login}
          alt="Background"
          className=" hidden md:block h-[490px] w-[500px] object-cover rounded-sm shadow-2xl shadow-black"
        /> */}
           <DotLottieReact
      src="https://lottie.host/5b8747b1-5388-439c-ad53-68bf60ae1f79/yhqJgbQDsr.lottie"
      loop
      autoplay
      className=" h-[500px] max-md:h-[270px] object-cover rounded-sm  "
    />
      </div>
      <div className="w-1/2 max-md:w-[100%] flex justify-center items-center inset-0  ">
        <div className="relative z-10 w-full max-w-lg px-6">
          <div className=" backdrop-blur-2xl bg-white/20 rounded-lg p-8 shadow-2xl shadow-black">
            <h3 className="text-2xl font-semibold mb-4 text-center text-white">
              Login Yourself
            </h3>
            <p className="text-sm font-semibold text-center text-white mb-8">
              Start tracking your spendings by joining with us.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
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
                disabled={isLoading}
                className="bg-slate-900 rounded-2xl w-full py-3 text-lg text-white font-medium cursor-pointer flex justify-center items-center hover:bg-blue-500 "
                type="submit"
              >
                {isLoading ? ( <LoaderIcon className="w-10 h-10 text-white mx  animate-spin"/> ) : "Login" }
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
    </div>
  );
}

export default Login;