import axios from 'axios';

const api = axios.create({
  baseURL: 'http://68.183.121.47/deliverie/',
});

export default api;