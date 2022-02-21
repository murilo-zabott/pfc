import styled from 'styled-components'

export const Container = styled.div`
    min-height: 100vh;
    padding-top: 20vh;

    display: grid;
    gap: 2rem;
    justify-content: center;
    grid-template-columns: repeat(auto-fit, 6rem);
    grid-auto-rows: 6rem;
    
    a{
        text-decoration: none;
        color: black;
    }

    div {
        width: 100%;
        height: 100%;
        background-color: white;
        border-radius: 10px;
        padding: 0.5rem;
        text-align: center;
        line-height: 5rem;
    }
`