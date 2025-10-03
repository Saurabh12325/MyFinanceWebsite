import { useContext, useEffect } from "react"
import { AppContext } from "../Context/AppContext"
import { useNavigate } from "react-router-dom"
import axiosConfig from "../util/axiosConfig"
import { API_ENDPOINTS, BASE_URL } from "../util/apiEndPoint"


export const useUser = () =>{
    const {user,setUser,clearUser} = useContext(AppContext)
    const navigate = useNavigate();
    useEffect(()=>{
        if(user){
            return
        }
        let isMounted = true;
        const fetchUserData = async ()=>{
            try{
           const response = await axiosConfig.get(`${BASE_URL}${API_ENDPOINTS.PROFILE}`)
             if(isMounted && response.data){
                setUser(response.data);
             }
            }catch(error){
             console.log("Failed to fetch the user information",error);
             if(isMounted){
                clearUser();
                navigate("/login");
             }
            }
            
        }
        fetchUserData();
        return()=>{
            isMounted=false;
        }
    },[setUser,clearUser,navigate]);
}