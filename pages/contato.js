import Head from 'next/head'
import axios from 'axios'
import React, { useState, useEffect } from 'react'

import { Facebook, Instagram, Twitter } from '@styled-icons/boxicons-logos'

import Header from '@/components/Header/headerIndex'
import {
	Container,
	Wrapper,
	Contact,
	Form,
	Information,
	SocialMedia,
} from '@/pageStyles/contatoStyle'

import { LocationOn, Email, Phone } from 'styled-icons/material'

const Contato = () => {
	const [nome, setNome] = useState('')
	const [tel, setTel] = useState('')
	const [email, setEmail] = useState('')
	const [msg, setMsg] = useState('')
	const [errors, setErrors] = useState('')

	function clear() {
		setNome('')
		setTel('')
		setEmail('')
		setMsg('')
	}

	function submitEmail(e) {
		e.preventDefault()
		setErrors()

		const data = {
			name: nome,
			phone: tel,
			email: email,
			message: msg,
		}

		axios
			.post('http://127.0.0.1:8000/api/email', data)
			.then(res => {
				clear()
			})
			.catch(err => {
				var erro
				if (err.response.data.errors.name) {
					erro = err.response.data.errors.name[0]
				} else if (err.response.data.errors.email) {
					erro = err.response.data.errors.email[0]
				} else if (err.response.data.errors.message) {
					erro = err.response.data.errors.message[0]
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
				<title>Contato</title>
			</Head>
			<Header />
			<Container>
				<Wrapper>
					<Contact>
						<h1>Nos envie uma mensagem</h1>

						{errors}

						<Form onSubmit={e => submitEmail(e)}>
							<fieldset>
								<label>Nome</label>
								<input
									placeholder="Insira seu nome"
									onChange={e => setNome(e.target.value)}
									value={nome}
								/>
							</fieldset>

							<fieldset>
								<label>Telefone</label>
								<input
									placeholder="Apenas números"
									onChange={e => setTel(e.target.value)}
									value={tel}
								/>
							</fieldset>

							<fieldset className="full">
								<label>Email</label>
								<input
									placeholder="seuemail@dominio.com"
									onChange={e => setEmail(e.target.value)}
									value={email}
								/>
							</fieldset>

							<fieldset className="full">
								<label>Mensagem</label>
								<textarea
									placeholder="Insira o corpo da mensagem"
									onChange={e => setMsg(e.target.value)}
									value={msg}
								/>
							</fieldset>

							<button type="submit">ENVIAR</button>
						</Form>
					</Contact>

					<Information>
						<h1>Informações de contato</h1>
						<p>
							<LocationOn /> Endereço falso, rua não existe, 220.
						</p>
						<p>
							<Email /> produtorago@gmail.com
						</p>
						<p>
							<Phone /> 11 99887766
						</p>

						<hr />

						<h1>Nossas redes sociais</h1>
						<SocialMedia>
							<a>
								<Facebook />
							</a>

							<a>
								<Instagram />
							</a>

							<a>
								<Twitter />
							</a>
						</SocialMedia>
					</Information>
				</Wrapper>

				<div className="wave"></div>
			</Container>
		</>
	)
}

export default Contato
