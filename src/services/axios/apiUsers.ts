import axios from 'axios';

const registerUser = axios.create({
//   baseURL: 'https://localhost:7226/api', // Substitua pelo endpoint da nova API
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   timeout: 10000, // Timeout de 10 segundos para requisições
});

export default registerUser;