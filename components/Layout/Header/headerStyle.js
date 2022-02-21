import styled, { css } from 'styled-components'

import { Close, Menu } from 'styled-icons/material-rounded'

export const HeaderContainer = styled.header`
    width: 100%;
    height: 13vh;
    padding: 0 1.5rem;
    background: transparent;
    z-index: 100;

    position: fixed;

    display: flex;
    justify-content: center;
    align-items: center;

    transition: 300ms ease-in-out;

    ${props => props.isScrolled && css`
        height: 10vh;
        background: rgba(25, 25, 25, 0.6);
        backdrop-filter: saturate(150%) blur(5px);`
    }

    a {
        z-index: 10;
    }
`

export const Navbar = styled.nav`
    width: 100%;
    max-width: 1300px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
        width: 5rem;
    }
`

export const NavList = styled.ul`
    width: 100%;
    height: 100vh;
    background: var(--altBg);
    
    position: absolute;
    top: 0;
    left: -100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2.5rem;

    list-style: none;

    transition: 500ms;

    ${props => props.isActive && 'left: 0;'}

    @media screen and (min-width: 1025px) {
        width: auto;
        height: auto;
        background: transparent;
        
        position: initial;

        flex-direction: row;
    }
`

export const ListItem = styled.li`
    a {
        font-weight: 700;
        color: white;
        text-transform: uppercase;
        padding: 5px;
        font-size: 1.2rem;
        position: relative;
        
        background: linear-gradient(white, white) bottom left;
        background-size: 0% 3px;
        background-repeat: no-repeat;
        transition: 300ms;

        &:hover{
            background-size: 100% 3px;
        }

        &.hovered{
            background-size: 100% 3px;
        }

        /* Outro jeito de fazer o underline
        &::after{
            content: '';
            position: absolute;
            width: 100%;
            transform: scaleX(0);
            height: 3px;
            bottom: -5px;
            right: 0;
            background-color: white;
            transform-origin: bottom right;
            transition: transform 250ms ease-out;
        }

        &:hover::after{
            transform: scaleX(1);
            transform-origin: bottom left;
        } */
    }
`

export const LoginButton = styled.a`
    width: 7rem;
    text-align: center;
    background: none;
    border: 3px solid white;
    color: white;
    font-size: 1.2rem;
    font-weight: 700;
    padding: 5px 0;
    cursor: pointer;

    a {
        color: white;
        text-decoration: none;
    }
`

export const LogoutBtn = styled.button`
    width: 5rem;
    text-align: center;
    background: none;
    border: 3px solid white;
    color: white;
    font-size: 1.2rem;
    font-weight: 700;
    padding: 5px 10px;
    cursor: pointer;

    &.invisible{
        display: none;
    }
`

export const MenuButton = styled.button`
    background: none;
    cursor: pointer;
    border: none;
    color: white;
    z-index: 999;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;

    font-size: 1rem;
    font-weight: bold;
    text-transform: uppercase;
    color: white;
    
    transition: var(--hover-color);

    &:hover {
        color: var(--grayFont);
    }

    @media screen and (min-width: 1025px) {
        display: none;
    }
`

export const MenuIcon = styled(Menu)`
    width: 50px;
    height: 50px;
`

export const CloseIcon = styled(Close)`
    width: 50px;
    height: 50px;
`

export const ScrollUpBtn = styled.button`
    width: 40px;
    height: 45px;
    background: none;
    border: 2px solid white;
    border-radius: 1.2rem;
    cursor: pointer;
    z-index: 100;
    visibility: hidden;
    opacity: 0;

    position: fixed;
    bottom: 5px;
    right: 30px;

    color: white;

    transition: var(--hover-color), 200ms, transform 300ms cubic-bezier(0.5, 0, 0.5, 3);

    ${props => props.isScrolled && css`
        opacity: 1;
        visibility: visible;
        transform: translateY(-30px);
    `}

    &:hover {
        color: var(--grayFont);
        border: 2px solid var(--grayFont);
    }
`