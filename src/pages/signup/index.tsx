import React from 'react';
import {useNavigate} from 'react-router-dom';
import {Resolver, useForm} from 'react-hook-form';
import {Button, Input, NameForms, SignUpForm} from './styled';
import api from '../../http/api'
import { useAuth } from '../../context/authContext';


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
					message: 'Este campo é obrigatório.',
				},
				lastName: {
					type: 'required',
					message: 'Este campo é obrigatório.',
				},
				phone: { //obrigatorio?
					type: 'required',
					message: 'Este campo é obrigatório.',
				},
				birthDate: {
					type: 'required',
					message: 'Este campo é obrigatório.',
				},
				email: {
					type: 'required',
					message: 'Este campo é obrigatório.',
				},
				password: {
					type: 'required',
					message: 'Este campo é obrigatório.',
				},
			}
			: {},
	};
};

const SignUp: React.FC = () => {
	const {login} = useAuth();
	const navigate = useNavigate();

	const {register, handleSubmit, formState: {errors}} = useForm<FormValues>({resolver});
	const onSubmit = handleSubmit((data) => {
		api.post('/user/signup', data).then(() => {
			console.log("Usuário cadastrado com sucesso!");
			//algum problema logar automaticamente?
			login(data.email, data.password);
		})
			.catch((err) => { console.log(err); });
	});


	return (
		<SignUpForm onSubmit={onSubmit}>
			<NameForms>
				<Input {...register("name")} placeholder={(errors?.name && errors.name.message) || "Digite seu nome"}/>
{/*				{errors?.name && <p>{errors.name.message}</p>}*/}
				<Input {...register("lastName")} placeholder={(errors?.lastName && errors.lastName.message) || "Digite seu sobrenome"}/>
			</NameForms>
			<Input {...register("birthDate")} placeholder={(errors?.birthDate && errors.birthDate.message) || "Digite sua data de nascimento"} type="date"/>
			<Input {...register("phone")} placeholder={(errors?.phone && errors.phone.message) || "Digite seu telefone"} type='tel' inputMode={"tel"}/>
			<Input {...register("email")} placeholder={(errors?.email && errors.email.message) || "Digite seu email"} type='email' inputMode={"email"}/>
			<Input {...register("password")} placeholder={(errors?.password && errors.password.message) || "Digite sua senha"} type='password'/>

			<Input type="submit" value="Cadastrar-se"/>
			<p>Já tem uma conta? <Button onClick={() => navigate('/')}>Login</Button></p>
		</SignUpForm>
	);
}

export default SignUp;
