import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/asset.js";
import Input from "./Input.jsx";
import { validateEmail } from "../util/Validation.js";
import axiosConfig from "../util/axiosConfig.jsx";
import { API_ENDPOINTS } from "../util/apiEndPoint.js";
import toast, { LoaderIcon } from "react-hot-toast";
import { BASE_URL } from "../util/apiEndPoint.js";
import ProfilePhotoSelectors from "../components/ProfilePhotoSelectors.jsx";
import uploadProfileImage from "../util/uploadProfileImage.js"; 
import { DotLottieReact } from '@lottiefiles/dotlottie-react';


function SignUp() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [profileImage, setProfileImage] = useState(null);

  const navigate = useNavigate();

  const handleSumit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // --- Validation Checks (Correct) ---
    if (!fullName.trim()) {
      setError("FullName is required");
      setIsLoading(false);
      return;
    }

    if (!validateEmail(email)) {
      setError("Email is not valid");
      setIsLoading(false);
      return;
    }

    setError(null);
    let imageUrl = null; 

    try {
   
      if (profileImage) {
      
        imageUrl = await uploadProfileImage(profileImage);
        console.log("Image uploaded to Cloudinary. URL:", imageUrl);
      }
      
      
      const response = await axiosConfig.post(`${BASE_URL}${API_ENDPOINTS.REGISTER}`, {
        fullName,
        email,
        password,
        profileImage: imageUrl,
      });

      const { token, user } = response.data;
      if (token) {
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
      }

      if (response.status === 201) {
        toast.success("User Registered Successfully");
        navigate("/login");
      }
    } catch (err) {
      console.log("Something went wrong", err);
     
      setError(err.response?.data?.message || "Registration failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-screen w-full relative flex  items-center justify-center overflow-hidden bg-gradient-to-t from-emerald-400 via-black to-black flex-col md:flex-row divide-x-3   divide-white ">
      <div className="w-1/2 max-md:w-[200%] flex justify-center items-center inset-0">
        {/* <img
        
          src={assets.register}
          alt="Background"
          className="hidden md:block h-[580px] object-cover rounded-sm shadow-2xl shadow-black"
          
        /> */}
         <DotLottieReact
      src="https://lottie.host/7f053785-c349-4774-bcbf-b0f102c94f64/ZU2uy7UgAr.lottie"
      loop
      autoplay
      className=" h-[500px] max-md:h-[300px] object-cover rounded-sm  "
    />
      </div>

      <div className="w-1/2 max-md:w-[100%] flex justify-center items-center inset-0">
        <div className="relative z-10 w-full max-w-lg px-6">
          <div className="backdrop-blur-xl bg-white/20  rounded-lg shadow-2xl p-4">
            <h3 className="text-2xl font-semibold mb-4 text-center text-white">
              Create An Account
            </h3>
            <p className="text-sm font-semibold text-center text-white mb-8">
              Start tracking your spendings by joining with us.
            </p>
            <form onSubmit={handleSumit} className="space-y-4">
              <div className="flex justify-center items-center mb-4">
               
                <ProfilePhotoSelectors image={profileImage} setImage={setProfileImage} />
              </div>
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
                  type="email"
                />
                <div className="col-span-2">
                  <Input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    label="Password"
                    placeholder="*****************"
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
                className={`bg-slate-900 rounded-2xl w-full py-3 text-lg text-white font-medium cursor-pointer flex justify-center items-center gap-2 ${isLoading ? 'opacity-60 cursor-not-allowed' : ''} hover:bg-blue-500`}
                type="submit"
              >
                {isLoading ? (<LoaderIcon className="w-5 h-5 text-white mx animate-spin" />) : "SignUp"}
              </button>
              <p className="text-sm text-slate-800 text-center mt-6">
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
    </div>
  );
}

export default SignUp;