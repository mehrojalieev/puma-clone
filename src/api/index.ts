import axios, { AxiosInstance } from 'axios'


const ApiInstance: AxiosInstance = axios.create({
    baseURL: "http://localhost:2000/api",
    headers: {
        "Accept" : "application/json",
        "Content-Type" : "application/json",
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MTM3NjY5MzQsInVzZXIiOnsiZW1haWwiOiJpai5pYnJva2hpbS5qYWxhbG92QGdtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsIl9pZCI6IjY1YWY1NzEwZjQ1OWJiZDRmZGY3NmI0YSJ9LCJpYXQiOjE3MDU5OTA5MzR9.hOaZs_9kzystRGMNO8Fe_zChLdmP-Zthx176Nk6XnPM"
    },
    timeout: 10000
});


export default ApiInstance