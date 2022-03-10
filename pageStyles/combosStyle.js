import styled from 'styled-components'

export const Container = styled.div`
	min-height: 87vh;
	display: flex;
	justify-content: center;
	padding-top: 5vh;
`

export const CardsWrapper = styled.div`
	width: 90%;
	display: grid;
	justify-content: center;
	grid-template-columns: repeat(auto-fit, 20rem);
	grid-auto-rows: max-content;
	gap: 2rem;
	min-height: ${props => props.min}vh;
`
