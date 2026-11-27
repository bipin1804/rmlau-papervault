import axios from 'axios';

const api = axios.create({
  baseURL: "https://rmlau-papervault-cxi3.onrender.com/api",
  withCredentials: true,
});


export default api;

