import styled from 'styled-components'

export const ImagesContainer = styled.div`
    width: 80%;
    
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(auto-fit, minmax(${props => props.max}px, 1fr));
    grid-auto-rows: max(200px);

    figure {
        position: relative;

        div {
            width: 35px;
            height: 35px;
            border-radius: 50%;
            background: #d1173c;
            top: -5px;
            right: -5px;
            position: absolute;
            color: white;
            cursor: pointer;
            transition: 200ms;

            &:hover{
                filter: brightness(70%);
            }
        }

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
            border-radius: 30px;
        }
    }
`
