import Head from 'next/head'
import Header from '../components/Layout/Header/headerIndex'

import axios from 'axios'
import React from 'react'
import { Container } from '../pageStyles/galeriaStyle'

const Galeria = () => {
  const [jsx, setJsx] = useState()

  useEffect(async () => {
    const images = (await axios.get("/api/gallery")).data

    const imagens = images.map((image, index) =>
      <figure key={index}>
        <img src={image.url} />
      </figure>
    )

    setJsx(imagens)
  }, [])



  return (
    <>
      <Head>
        <title>Galeria</title>
      </Head>
      <Header />
      <Container>
        {jsx}
      </Container>
    </>
  )
}

export default Galeria