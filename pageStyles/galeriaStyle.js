import styled, { css } from 'styled-components'

const activeModal = css`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	transform: scale(1);
	visibility: visible;
`

export const Container = styled.section`
	min-height: 87vh;
	width: 100%;
`

export const GalleryWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	width: 100%;

	figure {
		flex: 0 0 33.33%;
		aspect-ratio: 16/9;

		@media screen and (max-width: 1024px) {
			flex-basis: 50%;
		}

		@media screen and (max-width: 768px) {
			flex-basis: 100%;
		}

		img {
			display: block;
			width: 100%;
			height: 100%;
			object-fit: cover;
			object-position: center;
			transition: 200ms ease;
			cursor: pointer;

			&:hover {
				filter: brightness(0.7);
			}
		}
	}
`

export const Modal = styled.div`
	z-index: 999;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.9);
	backdrop-filter: blur(10px);
	visibility: hidden;
	transform: scale(0);
	transition: transform 200ms ease;
	color: white;

	${props => props.active && activeModal}

	img {
		/* width: 90%;
		max-width: 600px; */
		height: 60vh;
		object-position: center;
		object-fit: cover;
		border-radius: 4px;
		margin-bottom: 30px;
	}

	svg {
		position: absolute;
		top: 30px;
		right: 30px;
		width: 70px;
		cursor: pointer;
		padding: 10px;
		transition: 200ms ease;

		&:hover {
			filter: brightness(0.8);
		}
	}

	span {
		font-size: 1.3rem;
	}
`
