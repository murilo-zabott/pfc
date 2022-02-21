import axios from 'axios'
import Head from 'next/head'
import Header from '../components/Layout/Header/headerIndex'
import { Container, CardsWrapper } from '../pageStyles/pacotesStyle'
import Card from '../components/Page-Pacotes/Card/cardIndex'
import React, { useEffect, useState } from 'react'

const Pacotes = () => {
  const [jsx, setJsx] = useState()

  useEffect(async () => {
    const packages = (await axios.get("/api/package")).data
    const cards = packages.map((pacote, index) =>
      <Card img={pacote.image} text={pacote.title} price={`R$ ${pacote.price}`} key={index} />
    )
    setJsx(cards)
  }, [])


  return (
    <>
      <Head>
        <title>Pacotes</title>
      </Head>
      <Header />
      <Container>
        <CardsWrapper min={100}>
          {jsx}
        </CardsWrapper>
      </Container>
    </>
  )
}

export default Pacotes