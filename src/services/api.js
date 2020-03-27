import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api-backend-canal.herokuapp.com'
});

export default api;