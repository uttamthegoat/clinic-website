import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000/api', 
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    withCredentials: true,
    timeout: 10000 // 10 seconds timeout
    });

export default axiosInstance;
