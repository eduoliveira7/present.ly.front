import React, { useState } from 'react';
import { useAuth } from '../../context/authContext';
import { useNavigate } from 'react-router-dom';
import { SignInButton, SignInDiv, SignInForm, SignInP } from './styled';

const SignIn: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(username, password);
  };

  return (
    <SignInDiv>
      <h2>Login</h2>
      <SignInForm onSubmit={handleSubmit}>
        <label>
          Usuário:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
          Senha:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button type="submit">Entrar</button>
      </SignInForm>
      <SignInP>Não tem uma conta? <SignInButton onClick={() => navigate('/signup')}>Cadastre-se</SignInButton></SignInP>
    </SignInDiv>
  );
};

export default SignIn;
