import axios, { AxiosInstance } from 'axios'


const ApiInstance: AxiosInstance = axios.create({
    baseURL: "https://successful-peplum-lamb.cyclic.app/api",
    headers: {
        "Accept" : "application/json",
        "Content-Type" : "application/json"
    },
    timeout: 10000
});


export default ApiInstance