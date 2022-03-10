import styled from 'styled-components'

export const Container = styled.section`
	min-height: 87vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 15vh 2rem 0;
	gap: 0.5rem;

	h1 {
		font-size: 2rem;
	}

	h2 {
		color: #333;
		font-size: 1.2rem;
		margin-bottom: 10px;
	}

	.erros {
		width: 100%;
		max-width: 480px;
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

export const LoginForm = styled.form`
	min-width: 280px;
	width: 30vw;
	margin-top: 10px;

	div {
		position: relative;

		svg {
			width: 25px;
			position: absolute;
			top: 50%;
			transform: translateY(-50%);
			left: 11px;
			color: #888;
		}

		div {
			height: 100%;
			width: 1px;
			background-color: #888;
			display: block;
			position: absolute;
			left: 45px;
			z-index: 5;
		}
	}

	input {
		height: 50px;
		width: 100%;
		border-radius: 5px;
		border: 1px solid #888;
		padding-left: 57px;
		display: block;
		margin: 10px 0;
	}

	button[type='submit'] {
		display: block;
		margin: 10px auto;
		font-size: 1.2rem;
		border: 0 !important;
		background: linear-gradient(
			to right,
			var(--produtora-blue),
			var(--produtora-green)
		);
		text-align: center;
		width: 9rem;
		padding: 12px 0;
		font-weight: bold;
		cursor: pointer;
		border-radius: 5rem;
		color: white;
		text-transform: uppercase;
		transition: var(--hover-color), width 200ms ease-out;

		&:hover {
			filter: brightness(1.2);
			width: 10rem;
		}
	}
`
