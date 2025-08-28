import axios from 'axios';

const axiosConfig = axios.create({
    baseURL: 'https://myfinance-p2v8.onrender.com', // Replace with your API base URL \
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json"

    }
});
//list of the endpoints

const excludeEndPoints = ["/login", "/register", "/activate", "/health"];

//request Interceptor
axiosConfig.interceptors.request.use(
    (config) => {
        const shouldSkipToken = excludeEndPoints.some((endPoint) =>
            config.url?.includes(endPoint)
        );

        if (!shouldSkipToken) {
            const accessToken = localStorage.getItem("token");
            if (accessToken) {
                config.headers["Authorization"] = `Bearer ${accessToken}`;
            }
        }
        return config;
    },
    (error) => Promise.reject(error)
);


//response interceptor
axiosConfig.interceptors.response.use((response) => {
    return response;
}, (error) => {
    if(error.response){
         if(error.response.status === 401){
            window.location.href = "/login";
         }
         else if(error.response.status === 500){
             console.error("Server error . Please Try again later");
         }
         else if (error.code === "ECONNABORTED"){
            console.error("Request TimeOut, Please Try again")

         }
         return Promise.reject(error);
    }
    
})
