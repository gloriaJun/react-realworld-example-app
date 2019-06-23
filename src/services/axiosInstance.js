import axios from 'axios';

const BASE_URL = process.env.API_URL;

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {},
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error);
  },
);

export default axiosInstance;
