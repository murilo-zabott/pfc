import React, { useState, useEffect, useContext } from 'react'
import { useRouter } from 'next/router'
import { AuthContext } from '../../contexts/AuthContext'
import Router from 'next/router'
import Link from 'next/link';
import axios from 'axios'

import Head from 'next/head'
import Header from '../../components/Layout/Header/headerIndex'
import { Container } from '../../pageStyles/compraStyle'

const Compra = () => {
    const { isAuthenticated, user } = useContext(AuthContext)
    const router = useRouter()
    const { id_compra } = router.query
    const [jsx, setJsx] = useState()
    const array = [];

    const downloadImage = async (key) => {
        const resp = await axios.post("/api/download", { key: key }, {
            headers: {
                "Content-Type": "application/json"
            },
        })
        console.log(resp)
    }

    const handleClick = (e, imagem) => {
        e.target.classList.toggle('selected')
        const key = imagem.split('https://bucket-produtora-go.s3.sa-east-1.amazonaws.com/').pop()
        downloadImage(key)
        setTimeout(()=>{
            const a = document.createElement('a');
            document.body.appendChild(a);
            a.download = key;
            a.href = './../../sadiopasjdoijasiodjasd.jpeg';
            a.click()
        }, 2000)
    }

    useEffect(async () => {
        if (!isAuthenticated) {
            //Router.push("/login")
        } else {
            const compra = (await axios.post('../api/listPurchases', { id: id_compra }, {
                headers: {
                    "Content-Type": "application/json"
                },
            })).data
            const images = compra.files

            setJsx(images.map((imagem, index) =>
                <figure key={index} onClick={(e)=>handleClick(e, imagem)}>
                    <img src={imagem}></img>
                </figure>
            ))
        }
    }, [])

    return (
        <>
            <Head>
                <title>Compra: {id_compra}</title>
            </Head>
            <Header />
            <Container>
                {jsx}
            </Container>
        </>
    )
}

export default Compra