import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }

  return req;
});

export const fetchHomeData = () => API.get("/");
export const createNewUserData = (newUserData) => API.post("/", newUserData);
export const updateUserData = (id, updatedUserData) =>
  API.patch(`/${id}`, updatedUserData);

export const signIn = (formData) => API.post("/user/signin", formData);
export const signUp = (formData) => API.post("/user/signup", formData);
