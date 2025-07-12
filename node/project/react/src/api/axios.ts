import axios from 'axios';
import type { AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import store from '../state';
import { setToken, logout } from '../state/slices/authSlice';

const api = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: true,
});


api.interceptors.request.use((cfg: InternalAxiosRequestConfig) => {
  const token = localStorage.getItem('accessToken');

  if (token) {
    cfg.headers.set('Authorization', `Bearer ${token}`);

  }
  return cfg;
}
);


let isRefreshing = false;
let subscribers: Array<(t: string) => void> = []

const onRefreshed = (token: string) => {
  subscribers.forEach(cb => cb(token));
  subscribers = [];
}

const addSubscriber = (cb: (t: string) => void) => subscribers.push(cb)


interface RetryAxiosConfig extends AxiosRequestConfig {
  _retry?: boolean
}


api.interceptors.response.use(
  (res: AxiosResponse) => res,
  async (err) => {
    const { response, config } = err;
    const originalRequest = config as RetryAxiosConfig;

    if (!response || response.status !== 401) {
      return Promise.reject(err)
    }

    if (originalRequest._retry) {
      return Promise.reject(err)
    }
    originalRequest._retry = true;

    if (!isRefreshing) {
      isRefreshing = true;
      try {
        const { data } = await api.post('/user/refreshToken');
        const newToken: string = data.accessToken

        localStorage.setItem('accessToken', newToken)
        store.dispatch(setToken(newToken))
        onRefreshed(newToken);
      } catch (error) {
        store.dispatch(logout());
        return Promise.reject(error)
      } finally {
        isRefreshing = false;
      }
    }

    return new Promise(resolve => {
      addSubscriber((token: string) => {
        originalRequest.headers = {
          ...originalRequest.headers,
          Authorization: `Bearer ${token}`
        };
        resolve(api(originalRequest))
      })
    })

  }
)


export default api;
