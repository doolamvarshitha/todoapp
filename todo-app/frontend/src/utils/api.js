import axios from 'axios';

// Set the base URL for the API requests
const API_URL = process.env.REACT_APP_API_URL;

const getAuthHeaders = () => {
  const token = localStorage.getItem('token');
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

// API calls for Authentication
export const signup = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/auth/signup`, data);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const login = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, data);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// API calls for Task Management
export const getTasks = async () => {
  try {
    const response = await axios.get(`${API_URL}/tasks`, getAuthHeaders());
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const createTask = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/tasks`, data, getAuthHeaders());
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const updateTask = async (taskId, data) => {
  try {
    const response = await axios.put(`${API_URL}/tasks/${taskId}`, data, getAuthHeaders());
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const deleteTask = async (taskId) => {
  try {
    const response = await axios.delete(`${API_URL}/tasks/${taskId}`, getAuthHeaders());
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// API calls for Profile Management
export const getProfile = async () => {
  try {
    const response = await axios.get(`${API_URL}/profile`, getAuthHeaders());
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const updateProfile = async (data) => {
  try {
    const response = await axios.put(`${API_URL}/profile`, data, getAuthHeaders());
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
