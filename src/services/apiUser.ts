import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://localhost:7295/api', // Substitua pelo endpoint da nova API
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000, // Timeout de 10 segundos para requisições
});
export default apiClient;
