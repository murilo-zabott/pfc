import styled from 'styled-components';

export const FooterContainer = styled.footer`
    padding: 0 1rem;
    background: var(--altBg);
`

export const Wrapper = styled.div`
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    padding: 2rem 1rem;
    justify-content: center;
    
    display: grid;
    grid-template-columns: auto;
    gap: 3rem;

    @media screen and (min-width: 468px) {
        grid-template-columns: repeat(auto-fill, auto)
    }
    @media screen and (min-width: 768px) {
        grid-template-columns: max-content max-content
    }
`

export const LinkSection = styled.section`
    h1 {color: white}
`

export const List = styled.ul`
    list-style: none;
`

export const ListItem = styled.li`
    margin: 10px 0;
    
    a {
        color: var(--grayFont);
        transition: 300ms;

        &:hover {
            color: white
        }
    }
`

export const CpSection = styled.section`
    padding: 2rem 0;
    border-top: 1px solid #333;
    
    text-align: center;
    color: white
`

export const IconsSM = styled.div`
    margin: 10px 0;
    text-align: center;
    color: white;
    position: relative;
    top: -10px;

    h1 {
        font-size: 1.5rem;
    }

    a{
        display: inline-block;
        width: 2rem;
        color: #aaa;
        margin: 0 5px;

        &:hover{
            color: white;
        }
    }
`