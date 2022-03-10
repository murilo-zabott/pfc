import styled from 'styled-components'

export const Container = styled.section`
	min-height: 87vh;
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	padding: 1rem;

	div.wave {
		position: absolute;
		right: 0;
		min-height: 100%;
		aspect-ratio: 1100/1200;
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
		background-image: url('waves2.svg');
		z-index: 0;
	}
`

export const Wrapper = styled.div`
	z-index: 5;
	box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.5);
	width: 100%;
	max-width: 1100px;
	background-color: #fff;

	display: grid;
	grid-template-columns: 1.7fr 1fr;

	@media screen and (max-width: 1024px) {
		grid-template-columns: 1fr;
	}

	h1 {
		font-size: 2rem;
		margin-bottom: 30px;
		font-weight: bold;
		position: relative;

		&::after {
			content: '';
			position: absolute;
			left: 0;
			bottom: -12px;
			width: 70px;
			height: 3px;
			background-color: black;
		}
	}
`

export const Contact = styled.div`
	padding: 2rem;

	@media screen and (max-width: 1024px) {
		padding: 1rem;
	}

	.erros {
		width: 100%;
		margin-bottom: 10px;
		padding: 1rem 2rem;
		color: #721c24;
		background-color: #f8d7da;
		border: 1px solid #f5c6cb;
		border-radius: 5px;

		li {
			margin: 5px 0;
		}
	}
`

export const Form = styled.form`
	display: flex;
	flex-wrap: wrap;

	fieldset {
		width: 50%;
		padding: 8px;
		border: 0;

		&.full {
			width: 100% !important;
		}

		@media screen and (max-width: 768px) {
			width: 100%;
		}
	}

	label {
		display: block;
		margin-bottom: 5px;
	}

	input,
	textarea {
		width: 100%;
		padding: 15px;
		border: 1px solid #888;
		resize: none;
		border-radius: 5px;
	}

	textarea {
		min-height: 200px;
	}

	button {
		font-weight: bold;
		border: 0;
		margin: 10px 8px 0 auto;
		/* background: linear-gradient(
			to right,
			var(--produtora-blue),
			var(--produtora-green)
		); */
		background-color: black;
		text-align: center;
		width: 8rem;
		padding: 12px 0;
		cursor: pointer;
		border-radius: 5rem;
		color: white;
		transition: var(--hover-color), width 200ms ease-out;

		&:hover {
			width: 9rem;
		}
	}
`

export const Information = styled.div`
	background-color: #efefef;

	padding: 2rem;

	@media screen and (max-width: 1024px) {
		padding: 1rem;
	}

	svg {
		display: inline-block;
		width: 32px;
		height: 32px;
	}

	p {
		font-size: 18px;
		display: flex;
		align-items: center;
		margin-bottom: 10px;

		svg {
			margin-right: 7px;
		}
	}

	hr {
		margin-bottom: 10px;
	}
`

export const SocialMedia = styled.div`
	gap: 5px;
	display: flex;
	align-items: center;
	justify-content: center;

	svg {
		border: 3px solid black;
		border-radius: 50%;
		margin: 0 5px;
		padding: 5px;
		cursor: pointer;
		transition: var(--hover-color);
		width: 50px;
		height: 50px;

		&:hover {
			border-color: #666;
			color: #666;
		}
	}
`
