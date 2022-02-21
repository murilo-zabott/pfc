import axios from 'axios'
import Head from 'next/head'
import Header from '../components/Layout/Header/headerIndex'
import { Container, CardsWrapper } from '../pageStyles/pacotesStyle'
import Card from '../components/Page-Pacotes/Card/cardIndex'

const Pacotes = ({ packages }) => {

  const cards = packages.map((pacote, index) =>
    <Card img={pacote.image} text={pacote.title} price={`R$ ${pacote.price}`} key={index} />
  )

  return (
    <>
      <Head>
        <title>Pacotes</title>
      </Head>
      <Header />
      <Container>
        <CardsWrapper min={100}>
          {cards}
        </CardsWrapper>
      </Container>
    </>
  )
}

export async function getStaticProps() {
  const url = `${process.env.BP}/api/package`
  const packages = (await axios.get(url)).data

  return {
    props: {
      packages,
    },
  }
}

export default Pacotes