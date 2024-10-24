import React, { useState } from 'react';
import { useAuth } from '../../context/authContext';
import { useNavigate } from 'react-router-dom';
import {Button, SignInDiv, SignInForm, SignInP} from './styled';
import { Input } from '../signup/styled.ts';

const SignIn: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(username, password);
  };

	//img background

  return (
    <SignInDiv>
      <h2>Login</h2>
      <SignInForm onSubmit={handleSubmit}>
        <label>
          <Input type="text" value={username} placeholder={"Email"} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
          <Input type="password" value={password} placeholder={"Senha"} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <Button type="submit">Entrar</Button>
      </SignInForm>
      <SignInP>Não tem uma conta? <Button onClick={() => navigate('/signup')}>Cadastre-se</Button></SignInP>
    </SignInDiv>
  );
};

export default SignIn;
