import axios from 'axios';

const TIMEOUT_IN_MS = 10000;

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: TIMEOUT_IN_MS,
  headers: {
    // Configure from Axios Base Query
  },
});

export default axiosInstance;
