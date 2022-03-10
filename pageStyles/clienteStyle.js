import styled from 'styled-components'

export const Container = styled.div`
	/* display: grid;
gap: 2rem;
justify-content: center;
grid-template-columns: repeat(auto-fit, 6rem);
grid-auto-rows: 6rem;

a {
  text-decoration: none;
  color: black;
}

div {
  width: 100%;
  height: 100%;
  background-color: white;
  border-radius: 10px;
  padding: 0.5rem;
  text-align: center;
  line-height: 5rem;
} */
	min-height: 87vh;
	padding-top: 10vh;

	display: flex;
	justify-content: center;

	div {
		width: 250px;
		height: 125px;
		box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.2);
		padding: 1rem;
		border-radius: 5px;
	}

	a {
		text-decoration: underline;
		margin-bottom: 15px;
		font-size: 1.5rem;
	}

	a,
	label {
		display: block;
		font-weight: bold;
	}
`
