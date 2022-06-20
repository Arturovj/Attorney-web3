import axios from 'axios';

const http = axios.create({
    baseURL: 'http://localhost:3001/api',
    withCredentials: false
});

http.interceptors.request.use((response) => response.data);

export default http