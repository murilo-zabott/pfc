import React, { useState } from 'react'
import Dropzone from 'react-dropzone'

import { DropContainer } from './fileDropzoneStyle'

const FileDropzone = ({ multiple, onFileChange, length }) => {
	function renderMessage(length) {
		if (length == 0) {
			return (
				<p>
					Arraste seus arquivos aqui
					<br />
					ou
					<br />
					Clique para selecionar
				</p>
			)
		}

		if (length == 1) {
			return <p>1 Arquivo selecionado</p>
		}

		if (length > 1) {
			return <p>{length} arquivos selecionados</p>
		}
	}

	return (
		<Dropzone
			accept="image/*"
			multiple={multiple}
			onDropAccepted={onFileChange}
		>
			{({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
				<DropContainer
					{...getRootProps()}
					isDragActive={isDragActive}
					isDragReject={isDragReject}
					hasFiles={length > 0}
				>
					<input {...getInputProps()} />

					{isDragReject ? (
						<p>Arquivo inválido</p>
					) : isDragActive ? (
						'Solte os arquivos'
					) : (
						renderMessage(length)
					)}
				</DropContainer>
			)}
		</Dropzone>
	)
}

export default FileDropzone
