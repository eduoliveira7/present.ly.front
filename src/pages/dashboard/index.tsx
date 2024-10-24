import React from 'react';
import { useAuth } from '../../context/authContext';

const Dashboard: React.FC = () => {
  const { user, logout } = useAuth();



  /*
  nav bar?
  show user name? id? email? == key
  register items? redirect to register items page?
  show items?
   */
  return (
    <div>
      <h2>Bem-vindo, {user}!</h2>
      <button onClick={logout}>Sair</button>
    </div>
  );
};

export default Dashboard;
