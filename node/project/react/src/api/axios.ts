import axios from 'axios';
import type { AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import store from '../state';
import { setToken, logout } from '../state/slices/authSlice';
import { data } from 'react-router-dom';

const api = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: true,
});


api.interceptors.request.use((cfg: InternalAxiosRequestConfig) => {
  const token = localStorage.getItem('accessToken');

  if (token) {
    cfg.headers = cfg.headers || {};
    cfg.headers['Authorization'] = `Bearer ${token}`;
  }

  return cfg;
});





api.interceptors.response.use((config) => {
  return config
}, async (error) => {
  const originalRequest = error.config;
  if (error.response.status == 401 && error.config && !error.config._isRetry) {
    originalRequest._isRetry = true;
    try {
      const response = await api.post(`http://localhost:3000/user/refreshToken`)
      localStorage.setItem('token', response.data.accessToken)
      store.dispatch(setToken(response.data.accessToken))
      return api.request(originalRequest);
    } catch (error) {
      console.log(error);
      store.dispatch(logout());
      
    }

  }
  throw error;
})

export default api;
