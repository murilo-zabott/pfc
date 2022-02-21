import Head from 'next/head'
import Header from '../components/Layout/Header/headerIndex'

import axios from 'axios'
import React from 'react'
import { Container } from '../pageStyles/galeriaStyle'

const Galeria = ({ images }) => {
  const imagens = images.map((image, index) =>
    <figure key={index}>
      <img src={image.url} />
    </figure>
  )

  return (
    <>
      <Head>
        <title>Galeria</title>
      </Head>
      <Header />
      <Container>
        {imagens}
      </Container>
    </>
  )
}

export async function getStaticProps() {
  const url = `${process.env.BP}/api/gallery`
  const images = (await axios.get(url)).data

  return {
    props: {
      images,
    },
    revalidate: 30,
  }
}

export default Galeria