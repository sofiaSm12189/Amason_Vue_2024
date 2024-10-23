import apiClient from '../services/api'
import axios from 'axios'

export async function loginUser(userData) {
  try {
    const response = await apiClient.post('/login', userData)
    const token = response.data.token
    localStorage.setItem('token', token)
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
}
