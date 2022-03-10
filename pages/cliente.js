import Head from 'next/head'
import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Header from '@/components/Header/headerIndex'
import { Container } from '@/pageStyles/clienteStyle'

const Cliente = () => {
	const [compras, setCompras] = useState()

	useEffect(async () => {
		const data = (await axios.get('purchase')).data

		setCompras(
			data.map(compra => (
				<div>
					<a href={`download/${compra.path}`}>Compra 1</a>
					<label>Data da compra:</label>
					<span>05/03/2022</span>
				</div>
			))
		)
	}, [])

	return (
		<>
			<Head>
				<title>Cliente</title>
			</Head>
			<Header />
			<Container>{compras}</Container>
		</>
	)
}

export default Cliente
