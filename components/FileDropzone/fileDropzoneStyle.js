import styled, { css } from 'styled-components'

const hasFiles = css`
	border: 2px solid #009dff;
	color: #009dff;
`

const dragActive = css`
	border-color: #26ff00;
	color: #26ff00;
`

const dragReject = css`
	border-color: red;
	color: red;
`

export const DropContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0 auto;

	border: 2px dashed black;
	border-radius: 4px;
	cursor: pointer;
	margin-bottom: 10px;

	max-height: 135px;
	max-width: 80vh;

	padding: 1.5rem 2.5rem;

	transition: 200ms ease;

	${props => props.hasFiles && hasFiles}
	${props => props.isDragActive && dragActive}
  ${props => props.isDragReject && dragReject}

  p {
		font-size: 1.1rem;
		text-align: center;
		line-height: 1.5;
	}
`
