import Head from 'next/head'
import React, { useState } from 'react'

import { Email, Phone } from 'styled-icons/material'

import Header from '@/components/Header/headerIndex'
import { Container, LoginForm } from '@/pageStyles/loginStyle'
import axios from 'axios'

const Login = () => {
	const [email, setEmail] = useState('')
	const [phone, setPhone] = useState('')
	const [errors, setErrors] = useState()

	function clear() {
		setEmail('')
		setPhone('')
	}

	function submitForm(e) {
		e.preventDefault()
		setErrors()

		const data = {
			email: email,
			password: phone,
		}

		axios
			// .post('authenticate', data)
			.post('http://127.0.0.1:8000/api/authenticate', data)
			.then(res => {
				clear()
				const a = document.createElement('a')
				a.href = res.data
				document.body.appendChild(a)
				a.click()
				document.body.removeChild(a)
			})
			.catch(err => {
				var erro
				if (err.response.data.errors.email) {
					erro = err.response.data.errors.email[0]
				} else if (err.response.data.errors.phone) {
					erro = err.response.data.errors.phone[0]
				} else if (err.response.data.errors.credentialError) {
					erro = err.response.data.errors.credentialError
				} else {
					erro = 'Houve um problema no sistema. Por favor, tente novamente.'
				}
				setErrors(
					<div className="erros">
						<li>{erro}</li>
					</div>
				)
			})
	}

	return (
		<>
			<Head>
				<title>Login</title>
			</Head>
			<Header />
			<Container>
				<h1>Seja bem vindo!</h1>
				<h2>Faça seu login para acessar seu painel de controle.</h2>
				{errors}
				<LoginForm onSubmit={e => submitForm(e)}>
					<label>Email</label>
					<div>
						<Email />
						<div></div>
						<input
							type="text"
							name="email"
							placeholder="seuemail@dominio.com"
							value={email}
							onChange={e => setEmail(e.target.value)}
						/>
					</div>

					<label>Telefone com DDD</label>
					<div>
						<Phone />
						<div></div>
						<input
							type="phone"
							name="phone"
							placeholder="Apenas números!"
							value={phone}
							onChange={e => setPhone(e.target.value)}
						/>
					</div>

					<button type="submit">LOGIN</button>
				</LoginForm>
			</Container>
		</>
	)
}

export default Login
