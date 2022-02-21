import styled from 'styled-components'

export const Container = styled.section`
    column-count: 5;
    column-gap: 10px;
    max-width: 80%;
    margin: 0 auto;
    padding: 20vh 0;
    min-height: 100vh;

    figure{
        margin: 0;
        display: flex;
        margin-bottom: 10px;
        break-inside: avoid;
    }

    img{
        width: 100%;
        border-radius: 4px;
    }
`