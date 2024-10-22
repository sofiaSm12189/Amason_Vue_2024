import apiClient from '../services/api';

export function loginUser(userData) {
    return apiClient.post('/login', userData);  // URL del endpoint para registrar usuario
  }