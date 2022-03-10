import React, { useState, useEffect } from 'react'
import axios from 'axios'
import FileDropzone from '@/components/FileDropzone/fileDropzoneIndex'
import { PreviewWrapper } from './ControllerStyles'

const PurchasesController = () => {
	const [files, setFiles] = useState([])
	const [preview, setPreview] = useState([])
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [phone, setPhone] = useState('')

	function submitForm(e) {
		e.preventDefault()

		if (files.length == 0) {
			alert('Nenhum arquivo selecionado')
			return
		}
		let formData = new FormData()

		formData.append('name', name)
		formData.append('email', email)
		formData.append('password', phone)
		for (let i = 0; i < files.length; i++) {
			formData.append('files[]', files[i])
		}

		axios.post(`purchase/store`, formData, {
			// axios.post(`http://127.0.0.1:8000/api/purchase/store`, formData, {
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		})

		setFiles([])
		setPreview([])
		setName('')
		setEmail('')
		setPhone('')
	}

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
				<h1>Compras</h1>

				<FileDropzone
					multiple={true}
					onFileChange={setFiles}
					length={files.length}
				/>

				<label>Preview</label>
				<PreviewWrapper>{preview}</PreviewWrapper>

				<label>Nome</label>
				<input
					type="text"
					placeholder="Insira o nome do cliente"
					onChange={e => setName(e.target.value)}
					value={name}
					required
				/>

				<label>Email</label>
				<input
					type="email"
					placeholder="Insira o email do cliente"
					onChange={e => setEmail(e.target.value)}
					value={email}
					required
				/>

				<label>Telefone</label>
				<input
					type="tel"
					pattern="[0-9]{6,11}"
					placeholder="Insira o telefone do cliente"
					onChange={e => setPhone(e.target.value)}
					value={phone}
					required
				/>

				<button type="submit">Enviar</button>
			</form>
		</>
	)
}

export default PurchasesController
