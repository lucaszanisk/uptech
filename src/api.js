import axios from 'axios';
const api = axios.create({
  baseURL: 'https://www.googleapis.com/auth/books',
});

export default api;
