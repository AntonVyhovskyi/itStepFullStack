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


// let isRefreshing = false;
// let subscribers: Array<(t: string) => void> = []

// const onRefreshed = (token: string) => {
//   subscribers.forEach(cb => cb(token));
//   subscribers = [];
// }

// const addSubscriber = (cb: (t: string) => void) => subscribers.push(cb)


// interface RetryAxiosConfig extends AxiosRequestConfig {
//   _retry?: boolean
// }


// api.interceptors.response.use(
//   (res: AxiosResponse) => res,
//   async (err) => {
//     const { response, config } = err;
//     const originalRequest = config as RetryAxiosConfig;

//     if (!response || response.status !== 401) {
//       return Promise.reject(err)
//     }

//     if (originalRequest._retry) {
//       return Promise.reject(err)
//     }
//     originalRequest._retry = true;

//     if (!isRefreshing) {
//       isRefreshing = true;
//       try {
//         const { data } = await api.post('/user/refreshToken');
//         const newToken: string = data.accessToken

//         localStorage.setItem('accessToken', newToken)
//         store.dispatch(setToken(newToken))
//         onRefreshed(newToken);
//       } catch (error) {
//         store.dispatch(logout());
//         return Promise.reject(error)
//       } finally {
//         isRefreshing = false;
//       }
//     }

//     return new Promise((resolve, reject) => {
//       addSubscriber((token: string) => {
//         if (!originalRequest.headers) {
//           originalRequest.headers = {};
//         }
//         originalRequest.headers['Authorization'] = `Bearer ${token}`;

//         api({
//           ...originalRequest,
//           headers: originalRequest.headers,
//           data: originalRequest.data,
//         })
//           .then(resolve)
//           .catch(reject);
//       });
//     });

//   }
// )


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
