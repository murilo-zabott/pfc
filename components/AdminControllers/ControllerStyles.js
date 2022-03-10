import styled from 'styled-components'

export const PreviewWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 10px;
	margin-bottom: 10px;

	img {
		display: block;
		width: calc(33.33% - 7px);
		aspect-ratio: 4/3;
		border: 1px solid #aaa;
		object-fit: cover;
		object-position: center;
	}
`

export const GalleryWrapper = styled.div`
	width: 80%;
	display: grid;
	gap: 20px;
	grid-template-columns: repeat(auto-fit, 300px);
	grid-auto-rows: max(200px);

	justify-content: center;

	figure {
		position: relative;

		div {
			width: 35px;
			height: 35px;
			border-radius: 50%;
			background: #d1173c;
			top: -5px;
			right: -5px;
			position: absolute;
			color: white;
			cursor: pointer;
			transition: 200ms;

			&:hover {
				filter: brightness(70%);
			}
		}

		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			object-position: center;
			border-radius: 30px;
		}
	}
`
