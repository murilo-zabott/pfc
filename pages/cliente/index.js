import React, { useState, useEffect, useContext } from 'react'
import Router from 'next/router'
import Link from 'next/link';
import { AuthContext } from '../../contexts/AuthContext'
import axios from 'axios'

import Head from 'next/head'
import Header from '../../components/Layout/Header/headerIndex'
import { Container } from '../../pageStyles/clienteStyle'

const Cliente = () => {
    const { isAuthenticated, user } = useContext(AuthContext)
    const [jsx, setJsx] = useState()

    useEffect(async () => {
        if (!isAuthenticated) {
            Router.push("/login")
        } else {
            const compras = (await axios.post('../api/listPurchases', {email: user.email}, {
                headers: {
                    "Content-Type": "application/json"
                },
            })).data
            setJsx(compras.map((compra, index) =>
                <Link key={index} href={`/cliente/${compra._id}`}><a>
                    <div>Compra {index + 1}</div>
                </a></Link>
            ))
        }
    }, [])


    return (
        <>
            <Head>
                <title>Cliente</title>
            </Head>
            <Header />
            <Container>
                {jsx}
            </Container>
        </>
    )
}

export default Cliente