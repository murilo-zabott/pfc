import Head from 'next/head'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Close } from 'styled-icons/material-rounded'

import Header from '@/components/Header/headerIndex'
import { Container, GalleryWrapper, Modal } from '@/pageStyles/galeriaStyle'

const Galeria = () => {
	const [open, setOpen] = useState(false)
	const [src, setSrc] = useState()
	const [alt, setAlt] = useState()

	const [images, setImages] = useState()

	function handleClick(e) {
		setOpen(true)
		setSrc(e.target.src)
		setAlt(e.target.alt)
	}

	useEffect(async () => {
		const res = await axios.get(`gallery`)
		// const res = await axios.get(`http://127.0.0.1:8000/api/gallery`)
		const data = res.data

		setImages(
			data.map((image, index) => (
				<figure key={index}>
					<img
						src={`storage/${image.src}`}
						// src={`http://127.0.0.1:8000/storage/${image.src}`}
						alt={image.description}
						onClick={e => handleClick(e)}
					/>
				</figure>
			))
		)
	}, [])

	return (
		<>
			<Head>
				<title>Galeria</title>
			</Head>
			<Header />
			<Container>
				<Modal active={open}>
					<Close onClick={() => setOpen(false)} />
					<img src={src} />
					<span>{alt}</span>
				</Modal>
				<GalleryWrapper>{images}</GalleryWrapper>
			</Container>
		</>
	)
}

export default Galeria
