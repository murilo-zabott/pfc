import Router from 'next/router'
import React, { useState, useContext, useEffect } from 'react'

import Head from 'next/head'
import Header from '../components/Layout/Header/headerIndex'
import { AuthContext } from '../contexts/AuthContext'

import { Container } from '../pageStyles/loginStyle'
import { Email } from '@styled-icons/material/Email'
import { PhoneAlt } from '@styled-icons/fa-solid/PhoneAlt'

const Login = () => {
    const { isAuthenticated, user, login } = useContext(AuthContext)

    useEffect(() => {
        if (isAuthenticated) {
            Router.push(user.isAdm ? '/admin' : '/cliente')
        }
    }, [])

    const [values, setValues] = useState({ email: "", phone: "" })

    const handleChange = (e) => {
        setValues(prevValues => ({
            ...prevValues,
            [e.target.name]: e.target.value
        }))
    }

    const submitLogin = async (e) => {
        e.preventDefault()

        const bool = await login(values)

        e.target.classList.toggle('erro', bool)
    }

    return (
        <>
            <Head>
                <title>Login</title>
            </Head>
            <Header />
            <Container>
                <h1>Seja bem vindo!</h1>
                <h2>Faça seu login para acessar a área de usuário</h2>
                <form onSubmit={(e) => submitLogin(e)}>
                    <input type='text' name="email" placeholder='E-mail' value={values.email} onChange={(e) => handleChange(e)} required></input>
                    <Email />
                    <input type="tel" pattern="[0-9]{8,11}" name="phone" placeholder='Telefone' value={values.phone} onChange={(e) => handleChange(e)} required></input>
                    <PhoneAlt />
                    <input type='submit' value="Logar"></input>
                </form>
            </Container>
        </>
    )
}

export default Login