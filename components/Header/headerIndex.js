import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Link from 'next/link'

import { Close, Menu } from 'styled-icons/material-rounded'
import {
	ChevronDown,
	ChevronUp,
	LogOut,
	LinkExternal,
} from 'styled-icons/boxicons-regular'

import {
	HeaderContainer,
	Nav,
	List,
	ListItem,
	LoginLink,
	Dropdown,
	MenuButton,
} from './headerStyle'

const Header = () => {
	//#region Menu mobile
	const [menu, setMenu] = useState(false)

	const menuClick = bool => {
		bool ? setMenu(!menu) : setMenu(false)
	}

	useEffect(() => {
		document.body.classList.toggle('lock', menu)
	}, [menu])
	//#endregion

	//#region Links navbar

	const listLinks = [
		['Início', '/'],
		['Galeria', 'galeria'],
		['Combos', 'combos'],
		['Contato', 'contato'],
	].map((pointer, index) => (
		<ListItem key={index}>
			<a href={pointer[1]} onClick={() => menuClick(false)}>
				{pointer[0]}
			</a>
		</ListItem>
	))
	//#endregion

	//#region Login/Dropdown
	const [dropdown, setDropdown] = useState(false)
	const [user, setUser] = useState()

	useEffect(async () => {
		// const data = (await axios.get('user')).data
		// if (data) {
		// 	setUser(data)
		// }
	}, [])

	return (
		<HeaderContainer>
			<a href="/" onClick={() => menuClick(false)}>
				<img src="/logo.png" />
			</a>

			<Nav isActive={menu}>
				<List>{listLinks}</List>

				<div className="separator"></div>

				{!user && <LoginLink href="login">Entrar</LoginLink>}

				{!!user && (
					<Dropdown className="dropdown" isActive={dropdown}>
						<div className="btn">
							<span onClick={() => setDropdown(!dropdown)}>
								Olá, {user.nome}!
							</span>
							<ChevronDown onClick={() => setDropdown(!dropdown)} />
							<ChevronUp onClick={() => setDropdown(!dropdown)} />
						</div>

						<div className="dropdownmenu">
							<a href={user.isAdmin ? 'admin' : 'cliente'}>
								Área do {user.isAdmin ? 'admin' : 'cliente'} <LinkExternal />
							</a>
							<a href="logout">
								Sair <LogOut />
							</a>
						</div>
					</Dropdown>
				)}
			</Nav>
			<MenuButton onClick={() => menuClick(true)}>
				{menu ? (
					<>
						FECHAR
						<Close />
					</>
				) : (
					<>
						MENU
						<Menu />
					</>
				)}
			</MenuButton>
		</HeaderContainer>
	)
}

export default Header
