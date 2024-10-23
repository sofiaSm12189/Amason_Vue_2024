import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:8000/api', // Reemplaza esto con la URL base de tu API
    headers: {
        'Content-Type': 'application/json'
    }
});

export default apiClient;