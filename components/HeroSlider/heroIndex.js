import React, { useState, useEffect } from 'react'
import axios from 'axios'

import {
	Container,
	Carousel,
	Slide,
	Title,
	Desc,
	Button,
	SliderController,
} from './heroStyle'
import { ChevronLeft, ChevronRight } from 'styled-icons/bootstrap'

const HeroSlider = () => {
	//#region Slideshow
	const [size, setSize] = useState(0)
	const [animate, setAnimate] = useState(true)
	const [position, setPosition] = useState(1)
	const [endposition, setEndposition] = useState(1)

	useEffect(() => {
		const timer = setTimeout(() => handleClick(true), 10000)
		return () => clearTimeout(timer)
	}, [position])

	const handleClick = bool => {
		if (!bool && position == 0) return
		if (bool && position == size + 1) return
		setAnimate(true)
		bool
			? setPosition(position => position + 1)
			: setPosition(position => position - 1)
	}

	const transitionEnd = () => {
		if (position == 0) {
			setAnimate(false)
			setPosition(size)
			setEndosition(size)
			return
		}
		if (position == size + 1) {
			setAnimate(false)
			setPosition(1)
			setEndposition(1)
			return
		}
		setEndposition(position)
	}
	//#endregion

	//#region Scrollar p/ sobre
	const scrollDown = () => {
		window.scrollTo({ top: 0.9 * window.innerHeight, behavior: 'smooth' })
	}
	//#endregion

	//#region Mapear imagens
	const [slides, setSlides] = useState()

	useEffect(async () => {
		const res = await axios.get('slide')
		// const res = await axios.get('http://127.0.0.1:8000/api/slide')
		const data = res.data

		setSize(data.length)
		setSlides(
			<>
				<Slide
					key="0"
					// src={`http://127.0.0.1:8000/storage/${data[data.length - 1].src}`}
					src={`storage/${data[data.length - 1].src}`}
				/>
				{data.map((file, index) => (
					<Slide
						key={index}
						// src={`http://127.0.0.1:8000/storage/${file.src}`}
						src={`storage/${file.src}`}
					>
						{index}
					</Slide>
				))}
				<Slide
					key={data.length + 1}
					// src={`http://127.0.0.1:8000/storage/${data[0].src}`}
					src={`storage/${data[0].src}`}
				/>
			</>
		)
	}, [])

	//#endregion

	return (
		<Container>
			<Carousel
				position={position}
				onTransitionEnd={transitionEnd}
				animated={animate}
				endPosition={endposition}
			>
				{slides}
			</Carousel>

			<Title>Produtora Go</Title>
			<Desc>
				Trabalhos em vários segmentos da área gráfica. Sempre dispostos a
				atender as demandas dos mais diversos clientes.
			</Desc>
			<Button onClick={scrollDown}>Saiba mais</Button>

			<SliderController onClick={() => handleClick(false)} left>
				<ChevronLeft />
			</SliderController>

			<SliderController onClick={() => handleClick(true)} right>
				<ChevronRight />
			</SliderController>
		</Container>
	)
}

export default HeroSlider
