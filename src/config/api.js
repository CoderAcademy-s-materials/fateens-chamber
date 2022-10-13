import axios from 'axios';

// Define an API
const fateenAPI = axios.create({
    // baseURL: 'http://localhost:3000'
    baseURL: 'https://fateen-api.up.railway.app/'

})

fateenAPI.interceptors.request.use((req) => {
    const token = sessionStorage.getItem("token");
    if (token) {
        req.headers["Authorization"] = `Bearer ${token}`;
    }
    return req;

})

export default fateenAPI;