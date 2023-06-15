import axios from "axios";
import { API_URLS } from "../utils/API_URLS";

const axiosInstance = axios.create({
  baseURL: "https://psychicaapi.seekware.tech/",
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers = {
        Authorization: `Bearer ${token !== null ? token : ""}`,
        ...config.headers,
      };
    }
    return config;
  },
  (err) => Promise.reject(err)
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error?.response?.data);
  }
);

export default axiosInstance;
