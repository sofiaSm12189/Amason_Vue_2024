import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://amason_api_2024.test/api', // Reemplaza esto con la URL base de tu API
    headers: {
        'Content-Type': 'application/json'
    }
});

export default apiClient;