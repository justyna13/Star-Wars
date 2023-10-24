import axios from 'axios';

export const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_STAR_WARS_API_BASE_URL
});

axiosClient.interceptors.response.use(
  (response) => Promise.resolve(response),
  (error) => Promise.reject(error.response.data)
);

