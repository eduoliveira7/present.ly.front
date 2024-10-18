import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Resolver, useForm } from 'react-hook-form';

type FormValues = {
  name: string;
  lastName: string;
  birthDate: Date;
  phone: string;
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
        }
      : {},
  };
};

const SignUp: React.FC = () => {

  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({ resolver });
  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <form onSubmit={onSubmit}>
      <input {...register("name")} placeholder="Digite seu nome" />
      {errors?.name && <p>{errors.name.message}</p>}
      
      <input {...register("lastName")} placeholder="Digite seu sobrenome" />

      <input type="submit" />
      <p>Já tem uma conta? <button onClick={() => navigate('/login')}>Login</button></p>
    </form>
  );
}

export default SignUp;
