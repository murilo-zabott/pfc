import styled, {keyframes} from 'styled-components'

const animationOne = keyframes`
    from {
        transform-origin: 100% 0;
        transform: scale(1)
    }
    to {
        transform-origin: 100% 0;
        transform: scale(1.5)
    }
`

const animationTwo = keyframes`
    from {
        transform-origin: 0 100%; transform: scale(1)
    }
    to {
        transform: scale(1.5)
    }
`

const animationThree = keyframes`
    from {
        transform: scale(1);
    }
    to {
        transform: scale(1.5);
    }
`

export const Container = styled.div`
    position: relative;
    height: 100vh;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    overflow: hidden;

    *:not(div) {
        z-index: 5;
    }
`

 export const Carousel = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;

    display: flex;
    transform: translateX(${ props => props.slidePos * -100}%);
    ${props => props.animated && 'transition: transform 800ms ease-in-out;'}
`

export const Imagem = styled.div`
    flex: 0 0 100%;
    
    background-image: url( ${props => props.src} );
    background-size: cover;
    background-position: center;
    filter: brightness(40%);

    z-index: ${props => props.animationNumber==null ? '1' : '0'};

    animation: ${props => {switch (props.animationNumber){
        case 0:
            return animationOne
        case 1:
            return animationTwo
        case 2:
            return animationThree
    }}} 8s forwards;
`

export const Title = styled.h1`
    font-size: 3.2rem;
    font-weight: 500;
    text-transform: uppercase;

    text-align: center;
    color: white;
    word-wrap: break-word;
    line-break: auto;

    @media screen and (min-width: 520px) {
        font-size: 3.8rem;
    }

    @media screen and (min-width: 678px) {
        font-size: 4.5rem;
    }
`

export const Desc = styled.span`
    font-size: 1.2rem;
    margin-bottom: 1rem;

    text-align: center;
    color: white;

    @media screen and (min-width: 520px) {
        max-width: 70vw;
        font-size: 1.4rem;
    }

    @media screen and (min-width: 678px) {
        max-width: 60vw;
        font-size: 1.5rem;
    }
`

export const Button = styled.button`
    padding: 5px 20px;
    background: none;
    border: 3px solid white;
    border-radius: 2rem;
    cursor: pointer;
    
    font-size: 1.5rem;
    color: white;
    
    transition: var(--hover-color);

    &:hover {
        border: 3px solid var(--grayFont);
        color: var(--grayFont);
    }

    @media screen and (min-width: 520px) {
        font-size: 2rem;
    }
`

export const SliderController = styled.button`
    color: white;
    top: 50%;
    width: 50px;
    height: 50px;
    background: none;
    border: 0;
    transform: translateY(-50%);
    cursor: pointer;
    transition: var(--hover-color);
    position: absolute;

    ${props => props.left ? 'left: 10px' : 'right: 10px'};

    &:hover {
        color: var(--grayFont);
    }
`