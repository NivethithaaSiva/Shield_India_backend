import axios from 'axios';

const API_BASE_URL = '/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Items API
export const itemsAPI = {
  getAll: () => api.get('/items'),
  getById: (id) => api.get(`/items/${id}`),
  create: (data) => api.post('/items', data),
  update: (id, data) => api.put(`/items/${id}`, data),
  delete: (id) => api.delete(`/items/${id}`),
  search: (keyword) => api.get(`/items?search=${keyword}`),
};

// Categories API
export const categoriesAPI = {
  getAll: () => api.get('/categories'),
  getById: (id) => api.get(`/categories/${id}`),
  create: (data) => api.post('/categories', data),
  update: (id, data) => api.put(`/categories/${id}`, data),
  delete: (id) => api.delete(`/categories/${id}`),
  getByProtectionType: (protectionTypeId) => api.get(`/categories?protectionTypeId=${protectionTypeId}`),
};

// Protection Types API
export const protectionTypesAPI = {
  getAll: () => api.get('/protection-types'),
  getById: (id) => api.get(`/protection-types/${id}`),
  create: (data) => api.post('/protection-types', data),
  update: (id, data) => api.put(`/protection-types/${id}`, data),
  delete: (id) => api.delete(`/protection-types/${id}`),
};

// Employees API
export const employeesAPI = {
  getAll: () => api.get('/employees'),
  getById: (id) => api.get(`/employees/${id}`),
  create: (data) => api.post('/employees', data),
  update: (id, data) => api.put(`/employees/${id}`, data),
  delete: (id) => api.delete(`/employees/${id}`),
  search: (keyword) => api.get(`/employees/search?keyword=${keyword}`),
  login: (credentials) => api.post('/employees/login', credentials),
};

export default api; 