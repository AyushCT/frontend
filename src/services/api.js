import axios from 'axios';

const API_BASE_URL = 'http://localhost:3005/api'; 

const api = axios.create({
  baseURL: API_BASE_URL,
});

// Function to check if user is authenticated
export const isAuthenticated = () => {
  return localStorage.getItem('token') !== null;
};

// Function to log in
export const login = (email, password) => {
  return api.post('/auth/login', { email, password });
};

// Function to register
export const register = (email, password) => {
  return api.post('/auth/register', { email, password });
};

// Function to fetch user profile
export const getUserProfile = () => {
  return api.get('/profile', {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  });
};

// Function to fetch roles
export const getRoles = () => {
  return api.get('/roles', {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  });
};

// Add other API functions for role management as needed

export default api;
