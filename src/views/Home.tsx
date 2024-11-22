import React, { useEffect, useState } from 'react';
import { fetchUserInfo } from '../services/userService';

const Home: React.FC = () => {
  // const [userInfo, setUserInfo] = useState<{ username: string; password: string } | null>(null);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const getUserInfo = async () => {
  //     try {
  //       const data = await fetchUserInfo();
  //       setUserInfo(data);
  //     } catch (error) {
  //       console.error('Erro ao carregar informações do usuário:', error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   getUserInfo();
  // }, []);

  // if (loading) return <p>Carregando...</p>;

  return <></>
  //   <div>
  //     <h1>Informações do Usuário</h1>
  //     <p><strong>Username:</strong> {userInfo?.username}</p>
  //     <p><strong>Password:</strong> {userInfo?.password}</p>
  //   </div>
  // );
};

export default Home;
