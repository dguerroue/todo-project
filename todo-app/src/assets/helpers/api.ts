// api.ts
import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api'; // TODO: env variable

const api = axios.create({
  baseURL: API_BASE_URL
});

api.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;