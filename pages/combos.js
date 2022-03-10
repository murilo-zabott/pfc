import axios from 'axios'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'

import Header from '@/components/Header/headerIndex'
import { Container, CardsWrapper } from '@/pageStyles/combosStyle'
import Card from '@/components/Card/cardIndex'

const Combos = () => {
	const [cards, setCards] = useState()

	useEffect(async () => {
		const res = await axios.get(`combo`)
		// const res = await axios.get(`http://127.0.0.1:8000/api/combo`)
		const data = res.data

		setCards(
			data.map((combo, index) => (
				<Card
					// img={`http://127.0.0.1:8000/storage/${combo.src}`}
					img={`storage/${combo.src}`}
					text={combo.title}
					price={`R$ ${combo.price}`}
					key={index}
				/>
			))
		)
	}, [])

	return (
		<>
			<Head>
				<title>Combos</title>
			</Head>
			<Header />
			<Container>
				<CardsWrapper>{cards}</CardsWrapper>
			</Container>
		</>
	)
}

export default Combos
