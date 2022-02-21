import styled from 'styled-components'

export const Container = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20vh 0 5vh;

    section { 
        background: white;
        min-width: 30%;
        border-radius: 10px;
        padding: 1rem;

        h1 {
            text-decoration: underline;
            margin-bottom: 25px;
            text-align: center;
        }
    }

    &>div {
        margin: 2rem 0;
    }

    form {
        div label {
            display: inline-block;
            &.fileLabel {
            padding: 5px 10px;
            border-radius: 20px;
            border: 2px solid red;
            cursor: pointer;
            margin-right: 10px;

                &:hover{
                    background: #ddd;
                }
                &.green{
                    border: 2px solid #04ff00;
                }
            }
        }
        
        label {
            display: block;
            width: max-content;
            margin-top: 10px;
            transition: 200ms;
        }

        input {
            transition: 200ms;

            &:not(:last-of-type){
                margin-bottom: 10px;
            }

            &[type=file]{
                display: none;
            }

            &[type=text], &[type=email], &[type=tel]{
                padding: 5px;
            }

            &[type=submit]{
                display: block;
                cursor: pointer;
                padding: 5px 7px;
                border-radius: 10px;
                background: none;
                border: 2px solid black;
                margin-top: 10px;
                
                &:hover{
                    background: #ddd;
                }
            }
        }

        small{
            margin-left: 5px;
            color: red;
        }
    }
`

export const Aviso = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    
    h1{
        text-align: center;
        color: white;
        font-size: 3rem;
    }
`