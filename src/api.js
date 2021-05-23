import axios from 'axios';
const key = 'AIzaSyCPVFV5BzCoCOtFZkwJmwNNb4tga54gzSo';
const api = axios.create({
  baseURL: `https://www.googleapis.com/books/v1/volumes?key=${key}`,
});

export default api;
