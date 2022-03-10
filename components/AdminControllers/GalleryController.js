import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Close } from '@styled-icons/material-rounded/Close'

import FileDropzone from '@/components/FileDropzone/fileDropzoneIndex'
import { GalleryWrapper, PreviewWrapper } from './ControllerStyles'

const GalleryController = () => {
	const [images, setImages] = useState()

	const [file, setFile] = useState([])
	const [preview, setPreview] = useState([])
	const [desc, setDesc] = useState('')

	function submitForm(e) {
		e.preventDefault()

		if (files.length == 0) {
			alert('Nenhum arquivo selecionado')
			return
		}

		let formData = new FormData()
		formData.append('file', file[0])
		formData.append('description', desc)

		axios
			.post(`gallery/store`, formData, {
				// .post(`http://127.0.0.1:8000/api/gallery/store`, formData, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			})
			.then(() => listGallery())

		setFile([])
		setPreview([])
		setDesc('')
	}

	function removeImage(id) {
		axios
			.get(`gallery/destroy/${id}`)
			// .get(`http://127.0.0.1:8000/api/gallery/destroy/${id}`)
			.then(() => listGallery())
	}

	async function listGallery() {
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
					/>
					<div onClick={() => removeImage(image.id)}>
						<Close />
					</div>
				</figure>
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
		listGallery()
	}, [])

	return (
		<>
			<form onSubmit={e => submitForm(e)}>
				<h1>Imagens Galeria</h1>

				<FileDropzone
					multiple={false}
					onFileChange={setFile}
					length={file.length}
				/>

				<label>Preview</label>
				<PreviewWrapper>{preview}</PreviewWrapper>

				<label>Descrição</label>
				<textarea
					placeholder="Insira uma descrição para a imagem"
					onChange={e => setDesc(e.target.value)}
					value={desc}
					required
				/>
				<button type="submit">Enviar</button>
			</form>
			<GalleryWrapper>{images}</GalleryWrapper>
		</>
	)
}

export default GalleryController
