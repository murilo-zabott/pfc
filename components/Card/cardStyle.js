import styled from 'styled-components'

export const Container = styled.div`
	position: relative;
	/* background: #eeeeee; */
	border: 10px solid #fff;
	box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.2);

	img {
		width: 100%;
		height: 17rem;
		object-fit: cover;
		object-position: center;
	}

	h1 {
		width: 100%;
		font-size: 1.5rem;
		padding: 10px;
	}

	p {
		padding: 0 10px 10px;
		font-size: 1.4rem;
	}

	button {
		align-self: start;
		justify-self: end;
		cursor: pointer;
		padding: 0.5rem 0.8rem;
		margin-right: 10px;

		border: 0;
		border-radius: 2rem;
		font-size: 1.2rem;
		background: linear-gradient(to right, #1c1947, #05532c);
		box-shadow: 0px 0px 15px -3px #000000;
		font-weight: 600;
		color: white;
	}

	div {
		width: 35px;
		height: 35px;
		border-radius: 50%;
		background: #d1173c;
		top: -20px;
		right: -20px;
		position: absolute;
		color: white;
		cursor: pointer;
		transition: 200ms;

		&:hover {
			filter: brightness(70%);
		}
	}
`
