import Head from 'next/head'
import Header from '../components/Layout/Header/headerIndex'

import { Container, Formulario } from '../pageStyles/contatoStyle'

const Contato = () => {
    return (
        <>
            <Head>
                <title>Contato</title>
            </Head>
            <Header />
            <Container>
                <Formulario></Formulario>
            </Container>
        </>
    )
}

export default Contato