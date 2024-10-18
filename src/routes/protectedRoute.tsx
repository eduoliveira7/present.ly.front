import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/authContext';

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({children}) => {  
  const { user } = useAuth();
  console.log(user)
  if (!user) {
    return <Navigate to="/" />;
  }
  return children;
};

export default ProtectedRoute;