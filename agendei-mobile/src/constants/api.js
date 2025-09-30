import axios from "axios"


const api = axios.create({
    baseURL:"http://10.11.0.28:3001"
});



export default api;
