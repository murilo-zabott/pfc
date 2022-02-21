import React, { useState, useEffect, useContext } from 'react';
import Router from 'next/router'
import Link from 'next/link';
import { AuthContext } from '../../../contexts/AuthContext'

import { HeaderContainer, Navbar, NavList, ListItem, LoginButton, LogoutBtn, MenuButton, MenuIcon, CloseIcon, ScrollUpBtn } from './headerStyle'
import { ChevronsUp } from 'styled-icons/boxicons-regular'

 const Header = () => {
    //#region Efeito scroll navbar
    useEffect(() => {
        window.addEventListener('scroll', changeScrolled);
    }, [])
    
    const [scrolled, setScrolled] = useState(false)

    const changeScrolled = () => {
        if (window.scrollY >= 80) {
            setScrolled(true)
        } else {
            setScrolled(false)
        }
    }
    //#endregion

    //#region Voltar ao topo
    const scrollTop = () => window.scrollTo({top: 0, behavior: 'smooth'})
    //#endregion

    //#region Menu mobile
    const [menu, setMenu] = useState(false)
    
    const menuClick = (bool) => bool ? setMenu(!menu) : setMenu(false)
    //#endregion

    //#region Links navbar
    const { isAuthenticated, user, setUser } = useContext(AuthContext)

    const listLinks = [
        ['início', '/'],
        ['galeria', '/galeria'],
        ['pacotes', '/pacotes'],
        ['contato', '/contato'],
    ].map(pointer =>
        <ListItem key={pointer[0]}>
            <Link href={pointer[1]}>
                <a onClick={() => menuClick(false)}>{pointer[0]}</a>
            </Link>
        </ListItem>
    )

    const sair = () => {
        setUser()
        Router.push('/login')
    }
    //#endregion

    return (
        <>
            <HeaderContainer isScrolled={scrolled}>
                <Navbar>
                    <Link href='/'>
                        <a onClick={() => menuClick(false)}><img src="/logo.png" /></a>
                    </Link>
                    
                    <MenuButton onClick={() => menuClick(true)} aria-label="Abrir Menu" aria-haspopup="true" aria-controls="menu" aria-expanded={menu ? 'true' : 'false'}>
                        {menu ? (<>fechar<CloseIcon /></>) : (<>menu<MenuIcon /></>)}
                    </MenuButton>

                    <NavList isActive={menu} role='menu'>
                        {listLinks}
                        <Link href={!isAuthenticated ? '/login' : user.isAdm ? '/admin' : 'cliente'}>
                            <LoginButton>{!isAuthenticated ? 'ENTRAR' : user.isAdm ? 'ADMIN' : 'CLIENTE'}</LoginButton>
                        </Link>
                        <LogoutBtn onClick={()=>sair()} className={!isAuthenticated ? 'invisible' : null}>SAIR</LogoutBtn>
                    </NavList>
                </Navbar>
            </HeaderContainer>

            <ScrollUpBtn onClick={scrollTop} isScrolled={scrolled} aria-label="Voltar ao topo" aria-controls="scroll">
                <ChevronsUp />
            </ScrollUpBtn>
        </>
    )
}

export default Header