import Router from 'next/router';
import Head from 'next/head'
import { useContext, useState, useEffect } from 'react'

import { AuthContext } from '../contexts/AuthContext'

import Header from '../components/Layout/Header/headerIndex'
import { Container, Aviso } from '../pageStyles/adminStyle'
import HeroController from '../components/Page-Admin/HeroController/index'
import GalleryController from '../components/Page-Admin/GalleryController/index'
import PackagesController from '../components/Page-Admin/PackagesController/index'
import PurchasesController from '../components/Page-Admin/PurchasesController/index'

const Admin = () => {
    const { isAuthenticated, user } = useContext(AuthContext)
    const [jsx, setJsx] = useState()
    const [text, setText] = useState('')

    const handleChange = (e) => {
        setText(e.target.value)
    }

    useEffect(() => {
        if (!isAuthenticated) {
            setJsx(<Aviso>Acesso bloqueado!<br />Usuário não conectado</Aviso>)
            Router.push("/login")
        } else if (isAuthenticated && !user.isAdm) {
            setJsx(<Aviso>Acesso bloqueado!<br />Usuário não é administrador</Aviso>)
            Router.push("/")
        } else {
            setJsx(
                <>
                    <HeroController />
                    <GalleryController />
                    <PackagesController />
                    <PurchasesController />
                </>
            )
        }
    }, [])

    return (
        <>
            <Head>
                <title>Administrador</title>
            </Head>
            <Header />
            <Container>
                {jsx}
            </Container>
        </>
    )
}

export default Admin