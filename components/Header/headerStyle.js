import styled, { css } from 'styled-components'

const navContainer = css`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 20px;
`

export const HeaderContainer = styled.header`
	width: 100%;
	height: 13vh;
	padding: 0 1.5rem;
	z-index: 100;
	position: sticky;
	top: 0;
	color: #131313;
	font-weight: bold;
	border-bottom: 1px solid #cecece;
	font-size: 1.2rem;
	background-color: #fff;

	display: flex;
	justify-content: space-between;
	align-items: center;

	a {
		z-index: 150;
	}

	img {
		height: 11vh;
	}
`

export const Nav = styled.nav`
	${navContainer}

	.separator {
		height: 4vh;
		width: 2px;
		background-color: black;
	}

	@media screen and (max-width: 1024px) {
		position: fixed;
		background: white;
		top: -100%;
		left: 0;
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: 500ms;
		flex-direction: column;
		background-color: #efefef;

		.separator {
			width: 35vw;
			height: 2px;
		}

		ul {
			flex-direction: column;
		}

		${props =>
			props.isActive &&
			css`
				top: 0 !important;
			`}
	}
`

export const List = styled.ul`
	${navContainer}
	list-style: none;
`

export const ListItem = styled.li`
	a {
		padding: 5px;
		position: relative;

		background: linear-gradient(#131313, #131313) bottom left;
		background-size: 0% 3px;
		background-repeat: no-repeat;
		transition: 300ms;

		&:hover {
			background-size: 100% 3px;
		}

		&.hovered {
			background-size: 100% 3px;
		}
	}
`

export const MenuButton = styled.button`
	cursor: pointer;
	z-index: 150;
	border: 0;
	outline: none;

	display: flex;
	justify-content: center;
	align-items: center;
	gap: 5px;

	transition: var(--hover-color);

	&:hover {
		color: #8f8f8f;
	}

	@media screen and (min-width: 1025px) {
		display: none;
	}

	svg {
		width: 50px;
		height: 50px;
	}
`

export const LoginLink = styled.a`
	background: linear-gradient(
		to right,
		var(--produtora-blue),
		var(--produtora-green)
	);
	text-align: center;
	width: 7rem;
	padding: 7px 0;
	cursor: pointer;
	border-radius: 5rem;
	color: white;
	text-transform: uppercase;
	transition: var(--hover-color), padding 200ms ease-out;

	&:hover {
		filter: brightness(1.2);
		padding: 10px 0;
	}
`

export const Dropdown = styled.div`
	position: relative;
	min-width: 200px;

	.btn {
		display: flex;
		justify-content: center;
		align-items: center;
		transition: 200ms ease;

		&:hover {
			color: #777;
		}
	}

	span {
		cursor: pointer;
	}
	svg {
		cursor: pointer;
		width: 40px;

		&:nth-of-type(1) {
			display: inline-block;
		}

		&:nth-of-type(2) {
			display: none;
		}
	}

	.dropdownmenu {
		position: absolute;
		top: 40px;
		width: 100%;
		box-shadow: 0 0 3px 0px rgba(0, 0, 0, 0.5);
		transform: scaleY(0);
		transition: transform 200ms ease;
		transform-origin: top;

		a {
			background: #efefef;
			display: block;
			padding: 0.8rem;
			opacity: 0;
			transition: 150ms ease;

			svg {
				display: inline-block;
				color: black;
				width: 20px;
				margin-left: 2px;
			}

			&:hover {
				background: #ccc;
			}
		}
	}

	${props =>
		props.isActive &&
		css`
			svg:nth-of-type(1) {
				display: none;
			}
			svg:nth-of-type(2) {
				display: inline-block;
			}

			.dropdownmenu {
				transform: scaleY(1);

				a {
					opacity: 1;
				}
			}
		`}
`
