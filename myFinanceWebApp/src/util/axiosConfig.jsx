import axios from 'axios';

const axiosConfig = axios.create({
    baseURL: 'https://myfinance-p2v8.onrender.com', // Replace with your API base URL \
    headers:{
        "Content-Type": "application/json",
        Accept : "application/json"

    }
});
//list of the endpoints

const excludeEndPoints = ["/login", "/register", "/activate", "/health"];

//request Interceptor
axiosConfig.interceptors.request.use((config => {
    const shouldSkipToken = excludeEndPoints.some((endPoint) => 
        config.url?.includes(endPoint))

    if(!shouldSkipToken) {
   const accessToken =  localStorage.getItem("token");
   if(accessToken) {
    config.headers["Authorization"] = `Bearer ${accessToken}`;
   }
    }
    return config
}
))

