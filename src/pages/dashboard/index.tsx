import React from 'react';
import { useAuth } from '../../context/authContext';

const Dashboard: React.FC = () => {
  const { user, logout } = useAuth();

  return (
    <div>
      <h2>Bem-vindo, {user}!</h2>
      <button onClick={logout}>Sair</button>
    </div>
  );
};

export default Dashboard;
