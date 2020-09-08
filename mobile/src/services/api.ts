import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.16.106:3331'
})

export default api;