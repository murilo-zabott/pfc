import styled, { css, keyframes } from 'styled-components'

const transition = css`
	transition: transform 800ms ease-in-out;
`

const animationOne = keyframes`
    from {
        transform-origin: 100% 0;
        transform: scale(1)
    }
    to {
        transform-origin: 100% 0;
        transform: scale(1.5)
    }
`

const animationTwo = keyframes`
    from {
        transform-origin: 0 100%; transform: scale(1)
    }
    to {
        transform: scale(1.5)
    }
`

const animationThree = keyframes`
    from {
        transform: scale(1);
    }
    to {
        transform: scale(1.5);
    }
`

export const Container = styled.div`
	position: relative;
	height: 88vh;
	padding: 0 5px;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	overflow: hidden;
	*:not(div) {
		z-index: 5;
	}
`

export const Carousel = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	display: flex;
	z-index: 1;
	transform: translateX(${props => props.position * -100}%);
	${props => props.animated && transition}

	div:nth-child(${props => props.endPosition + 1}) {
		z-index: -1 !important;
		animation: ${props => {
				switch (props.endPosition % 3) {
					case 0:
						return animationOne
					case 1:
						return animationTwo
					case 2:
						return animationThree
				}
			}}
			8s forwards;
	}
`

export const Slide = styled.div`
	flex: 0 0 100%;

	background-image: url(${props => props.src});
	background-size: cover;
	background-position: center;
	filter: brightness(40%);
`

export const Title = styled.h1`
	font-size: 4.5rem;
	font-weight: 500;
	text-transform: uppercase;
	text-align: center;
	color: white;
	word-wrap: break-word;
	line-break: auto;
	@media screen and (max-width: 768px) {
		font-size: 4rem;
	}
	@media screen and (max-width: 568px) {
		font-size: 3.2rem;
	}
	@media screen and (max-width: 448px) {
		font-size: 2.8rem;
	}
`

export const Desc = styled.span`
	font-size: 1.2rem;
	margin-bottom: 1rem;
	text-align: center;
	color: white;
	@media screen and (min-width: 520px) {
		max-width: 70vw;
		font-size: 1.4rem;
	}
	@media screen and (min-width: 678px) {
		max-width: 60vw;
		font-size: 1.5rem;
	}
`

export const Button = styled.button`
	padding: 5px 20px;
	background: none;
	border: 3px solid white;
	border-radius: 2rem;
	cursor: pointer;

	font-size: 1.5rem;
	color: white;

	transition: var(--hover-color);
	&:hover {
		border: 3px solid #888;
		color: #888;
	}
	@media screen and (min-width: 520px) {
		font-size: 2rem;
	}
`

export const SliderController = styled.button`
	color: white;
	top: 50%;
	width: 50px;
	height: 50px;
	border: 0;
	transform: translateY(-50%);
	cursor: pointer;
	transition: var(--hover-color);
	position: absolute;
	${props => (props.left ? 'left: 10px' : 'right: 10px')};
	&:hover {
		color: #888;
	}

	@media screen and (max-width: 768px) {
		background-color: #1f1f1f;
		width: 60px;
		height: 60px;
		padding: 10px;
		transform: translateY(0);
		top: auto;
		bottom: 0;
		left: auto;
		${props => (props.left ? 'right: 59px' : 'right: 0')};
	}
`
