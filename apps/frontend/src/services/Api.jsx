import axios from 'axios';
import * as authStorage from './authStorage';

const api = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
});

api.interceptors.request.use(
    async (config) => {
        const token = await authStorage.getToken();
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export const  fetchProducts = async () => api.get('/product');
export const register = (userData) => api.post('/auth/register', userData);
export const login = (credentials) => api.post('/auth/login', credentials);
export const logout = () => api.post('/auth/logout');
export const findNearbyStores = (latitude, longitude) =>
    api.get(`/store/nearby?latitude=${latitude}&longitude=${longitude}`);

export default api;