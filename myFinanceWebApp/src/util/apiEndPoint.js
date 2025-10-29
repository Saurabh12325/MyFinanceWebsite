export const BASE_URL = "https://regional-wenonah-saurabhsri-f5e81a0b.koyeb.app/api/v1.0";
// export const BASE_URL = "http://localhost:8080/api/v1.0";
const CLOUDINARY_CLOUD_NAME = "dtmnghjah";
export const API_ENDPOINTS = {
   LOGIN : "/profile/login",
   REGISTER : "/profile/register",
   PROFILE:"/profile",
   GET_ALL_CATEGORIES : "/category",
   UPLOAD_IMAGE : `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`,
   

}
