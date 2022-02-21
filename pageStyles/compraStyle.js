import styled from 'styled-components'

export const Container = styled.div`
    min-height: 100vh;
    padding-top: 20vh;

    display: grid;
    gap: 2rem;
    justify-content: center;
    grid-template-columns: repeat(auto-fit, 12rem);
    grid-auto-rows: 15rem;

    figure {
        img{
            width: 100%;
            border-radius: 10px;
            height: 100%;
            object-position: center;
            object-fit: cover;
            
            &.selected{
                border: 5px solid #0cf6fa;
            }
        }     
    }
`