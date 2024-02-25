import axios from "axios";
import {baseURL} from "../constants";


const apiService = axios.create({baseURL});
const API_KEY = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YjdhYmM2MThmZTJmYWYwNjE5NjA0Zjc1YjQ0MGM1ZCIsInN1YiI6IjY1NGIyYzhjZmQ0ZjgwMDExZWQzMTljMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Im4IohYkpSJmhqw7Y5qGSIGqnVhOwGrU4iCpPDOBz24"; // Замініть на свій ключ доступу до API

apiService.interceptors.request.use((request) => {
    request.headers.Authorization = `Bearer ${API_KEY}`;
    return request;
});


export {
    apiService,
    API_KEY
};