import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Close } from '@styled-icons/material-rounded/Close'

import FileDropzone from '@/components/FileDropzone/fileDropzoneIndex'
import { PreviewWrapper, Div, GalleryWrapper } from './ControllerStyles'

const SlideController = () => {
	const [slides, setSlides] = useState()

	const [files, setFiles] = useState([])
	const [preview, setPreview] = useState([])

	function submitForm(e) {
		e.preventDefault()

		if (files.length == 0) {
			alert('Nenhum arquivo selecionado')
			return
		}

		let formData = new FormData()

		for (let i = 0; i < files.length; i++) {
			formData.append('files[]', files[i])
		}

		axios
			.post(`slide/store`, formData, {
				// .post(`http://127.0.0.1:8000/api/slide/store`, formData, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			})
			.then(() => listSlides())

		setFiles([])
		setPreview([])
	}

	function removeSlide(id) {
		axios
			.get(`slide/destroy/${id}`)
			// .get(`http://127.0.0.1:8000/api/slide/destroy/${id}`)
			.then(() => listSlides())
	}

	async function listSlides() {
		const res = await axios.get(`slide`)
		// const res = await axios.get(`http://127.0.0.1:8000/api/slide`)
		const data = res.data

		setSlides(
			data.map((slide, index) => (
				<figure key={index}>
					<img src={`storage/${slide.src}`} />
					{/* <img src={`http://127.0.0.1:8000/storage/${slide.src}`} /> */}
					<div onClick={() => removeSlide(slide.id)}>
						<Close />
					</div>
				</figure>
			))
		)
	}

	useEffect(() => {
		listSlides()
	}, [])

	useEffect(() => {
		if (files.length > 0) {
			setPreview(
				files.map(file => {
					Object.assign(file, {
						preview: URL.createObjectURL(file),
					})
					return <img src={file.preview} />
				})
			)
		}
	}, [files])

	return (
		<>
			<form onSubmit={e => submitForm(e)}>
				<h1>Slides - Página inicial</h1>

				<FileDropzone
					multiple={true}
					onFileChange={setFiles}
					length={files.length}
				/>

				<label>Preview</label>
				<PreviewWrapper>{preview}</PreviewWrapper>
				{/* {files[0] ? <img src={preview}></img> : null} */}

				<button type="submit">Enviar</button>
			</form>
			<GalleryWrapper>{slides}</GalleryWrapper>
		</>
	)
}

export default SlideController
