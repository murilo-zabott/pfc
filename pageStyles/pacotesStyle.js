import styled from 'styled-components'

//não é mais usada
export const HeaderImage = styled.div`
    min-height: 30vh;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${props => props.src});
    background-size: cover;
    background-position: center;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
`
export const Container = styled.div`
    padding-top: 20vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const CardsWrapper = styled.div`
    width: 90%;
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(auto-fit, 20rem);
    grid-auto-rows: max-content;
    gap: 2rem;
    min-height: ${props=>props.min}vh;
`