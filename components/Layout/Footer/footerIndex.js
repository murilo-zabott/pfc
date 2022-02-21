import Link from 'next/link'

import { FooterContainer, Wrapper, LinkSection, List, ListItem, CpSection, IconsSM } from './footerStyle'

import { Facebook, Instagram, Twitter } from '@styled-icons/boxicons-logos'

const Footer = () => {
    //#region Gerar seções
    const sections = [
        ['Navegação', [
            ['Início', '/'],
            ['Galeria', '/'],
            ['Pacotes', '/'],
            ['Contato', '/']
        ]],
    ].map((sec, secIndex) =>
        <LinkSection key={secIndex}>
            <h1>{sec[0]}</h1>

            <List>
                {sec[1].map((pointer, pointerIndex) =>
                    <ListItem key={secIndex + pointerIndex}>
                        <Link href={pointer[1]}>
                            <a>{pointer[0]}</a>
                        </Link>
                    </ListItem>
                )}
            </List>
        </LinkSection>
    )
    //#endregion

    return (
        <FooterContainer>
            <Wrapper>
                {sections}
                <IconsSM>
                    <h1>Siga-nos nas redes sociais</h1>
                    <Link href=''><a><Facebook /></a></Link>
                    <Link href=''><a><Instagram /></a></Link>
                    <Link href=''><a><Twitter /></a></Link>
                </IconsSM>
            </Wrapper>

            <CpSection>
                <p>Copyright © 2022, Produtora GO.<br />Todos os direitos reservados.</p>
            </CpSection>
        </FooterContainer>
    )
}

export default Footer