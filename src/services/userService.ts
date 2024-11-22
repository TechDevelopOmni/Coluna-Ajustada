import apiClient from './apiUser';

export const fetchUserInfo = async () => {
  try {
    const response = await apiClient.get('/userauth/userinfo');
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar informações do usuário:', error);
    throw error;
  }
};

