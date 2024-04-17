import axios from 'axios';

const API_BASE_URL = 'http://localhost:3005/api/auth/register'; 

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const register = async (email, password, role) => {
  return api.post('/auth/register', { email, password, role });
};
