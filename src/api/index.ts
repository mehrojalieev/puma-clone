import axios, { AxiosInstance } from 'axios'


const ApiInstance: AxiosInstance = axios.create({
    baseURL: "http://localhost:2000/api",
    headers: {
        "Accept" : "application/json",
        "Content-Type" : "application/json"
    },
    timeout: 10000
});


export default ApiInstance