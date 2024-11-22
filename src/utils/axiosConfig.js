import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://jay-smiles-server.vercel.app/api/v1', 
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    withCredentials: true,
    timeout: 10000 // 10 seconds timeout
    });

export default axiosInstance;
