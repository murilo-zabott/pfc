import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Close } from '@styled-icons/material-rounded/Close'

import Card from '@/components/Card/cardIndex'
import { CardsWrapper } from '@/pageStyles/combosStyle'
import FileDropzone from '@/components/FileDropzone/fileDropzoneIndex'
import { PreviewWrapper } from './ControllerStyles'

const GalleryController = () => {
	const [cards, setCards] = useState()

	const [file, setFile] = useState([])
	const [preview, setPreview] = useState([])
	const [title, setTitle] = useState('')
	const [desc, setDesc] = useState('')
	const [price, setPrice] = useState(0)

	function submitForm(e) {
		e.preventDefault()

		if (files.length == 0) {
			alert('Nenhum arquivo selecionado')
			return
		}

		let formData = new FormData()
		formData.append('file', file[0])
		formData.append('title', title)
		formData.append('description', desc)
		formData.append('price', price)

		axios
			.post('combo/store', formData, {
				// .post('http://127.0.0.1:8000/api/combo/store', formData, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			})
			.then(() => listCombos())

		setFile([])
		setPreview([])
		setTitle('')
		setDesc('')
		setPrice(0)
	}

	function removeCombo(id) {
		axios
			.get(`combo/destroy/${id}`)
			// .get(`http://127.0.0.1:8000/api/combo/destroy/${id}`)
			.then(() => listCombos())
	}

	async function listCombos() {
		const res = await axios.get('combo')
		// const res = await axios.get('http://127.0.0.1:8000/api/combo')
		const data = res.data

		setCards(
			data.map((combo, index) => (
				<Card
					img={`storage/${combo.src}`}
					// img={`http://127.0.0.1:8000/storage/${combo.src}`}
					text={combo.title}
					price={`R$ ${combo.price}`}
					key={index}
				>
					<div onClick={() => removeCombo(combo.id)}>
						<Close />
					</div>
				</Card>
			))
		)
	}

	useEffect(() => {
		if (file[0]) {
			Object.assign(file[0], {
				preview: URL.createObjectURL(file[0]),
			})
			setPreview(<img src={file[0].preview} />)
		}
	}, [file])

	useEffect(() => {
		listCombos()
	}, [])

	return (
		<>
			<form onSubmit={e => submitForm(e)}>
				<h1>Combos</h1>

				<FileDropzone
					multiple={false}
					onFileChange={setFile}
					length={file.length}
				/>

				<label>Preview</label>
				<PreviewWrapper>{preview}</PreviewWrapper>

				<label>Título</label>
				<input
					type="text"
					placeholder="Insira um título para o combo"
					onChange={e => setTitle(e.target.value)}
					value={title}
					required
				/>

				<label>Descrição</label>
				<textarea
					placeholder="Insira uma descrição mais aprofundada do combo"
					onChange={e => setDesc(e.target.value)}
					value={desc}
					required
				/>

				<label>Preço</label>
				<input
					type="number"
					placeholder="Insira o preço do combo"
					onChange={e => setPrice(e.target.value)}
					value={price}
					required
				/>
				<button type="submit">Enviar</button>
			</form>
			<CardsWrapper>{cards}</CardsWrapper>
		</>
	)
}

export default GalleryController
