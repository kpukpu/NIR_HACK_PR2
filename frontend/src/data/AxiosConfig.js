import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://3.38.214.247:22/:8000/api',
    timeout: 5000000,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
});

export default axiosInstance;
