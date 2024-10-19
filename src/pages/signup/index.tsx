import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Resolver, useForm } from 'react-hook-form';
import { SignUpForm } from './styled';
import api from '../../http/api'

type FormValues = {
  name: string;
  lastName: string;
  birthDate: Date;
  phone: string;
  email: string;
  password: string;
};

const resolver: Resolver<FormValues> = async (values) => {
  return {
    values: values.name ? values : {},
    errors: !values.name
      ? {
          name: {
            type: 'required',
            message: 'This is required.',
          },
          lastName: {
            type: 'required',
            message: 'This is required.',
          },
          phone: {
            type: 'required',
            message: 'This is required.',
          },
          birthDate: {
            type: 'required',
            message: 'This is required.',
          },
          email: {
            type: 'required',
            message: 'This is required.',
          },
          password: {
            type: 'required',
            message: 'This is required.',
          },
        }
      : {},
  };
};

const SignUp: React.FC = () => {

  const navigate = useNavigate();  

  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({ resolver });
  const onSubmit = handleSubmit((data) => {
    api.post('/user/signup', data)
  });

  return (
    <SignUpForm onSubmit={onSubmit}>
      <input {...register("name")} placeholder="Digite seu nome" />
      {errors?.name && <p>{errors.name.message}</p>}
      
      <input {...register("lastName")} placeholder="Digite seu sobrenome" />
      <input {...register("birthDate")} placeholder="Digite sua data de nascimento" type="date"/>      <input {...register("phone")} placeholder="Digite seu telefone" type='tel'/>
      <input {...register("email")} placeholder="Digite seu email" type='email'/>
      <input {...register("password")} placeholder="Digite sua senha" type='password' />

      <input type="submit" />
      <p>Já tem uma conta? <button onClick={() => navigate('/')}>Login</button></p>
    </SignUpForm>
  );
}

export default SignUp;
