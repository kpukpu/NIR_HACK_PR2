import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://54.180.241.200:8000/api',
    timeout: 5000000,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
});

export default axiosInstance;
