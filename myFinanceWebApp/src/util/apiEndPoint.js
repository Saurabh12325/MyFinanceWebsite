export const BASE_URL = "https://regional-wenonah-saurabhsri-f5e81a0b.koyeb.app/api/v1.0";
// export const BASE_URL = "http://localhost:8080/api/v1.0";

const CLOUDINARY_CLOUD_NAME = "dtmnghjah";

export const API_ENDPOINTS = {
  LOGIN: "/profile/login",
  REGISTER: "/profile/register",
  PROFILE: "/profile",
  ADD_CATEGORY: "/category/saveCategory",
  UPDATE_CATEGORY: "/category/updateCategory",
  DELETE_CATEGORY: "/category/deleteCategory",
  GET_ALL_CATEGORIES: "/category/fetchAll",
  GET_ALL_INCOMES : "/income",
  ADD_INCOME: "/income/add",
  DELETE_INCOME: "/income",

  ADD_EXPENSE: "/expense/add",
  GET_ALL_EXPENSES: "/expense",
  DELETE_EXPENSE: "/expense",
  UPLOAD_IMAGE: `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`,
};
