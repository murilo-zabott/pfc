import styled from 'styled-components'

export const Container = styled.section`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    color: white;

    h1 {
        font-size: 3rem;
    }

    h2 {
        color: #aaa;
        font-size: 1.2rem;
    }

    form {
        min-width: 300px;
        width: 25%;
        text-align: left;

        svg {
            width: 25px;
            text-align: left;
            position: relative;
            bottom: 36px;
            left: 12px;
        }

        label {
            display: block;
            margin-bottom: 7px;
        }

        input {

            &:-webkit-autofill {
                box-shadow: inset 1px 0 0 1000px #0a0a0a;
                -webkit-box-shadow: inset 0 0 300px 1000px #0a0a0a !important;
                -webkit-text-fill-color: white !important;
            }

            &[type=text], &[type=tel]{
                background: #0a0a0a;
                border: 2px solid #0a0a0a;
                border-radius: 2px;
                padding: 15px;
                padding-left: 50px;
                color: white;
                width: 100%;
            }

            &[type=submit] {
                cursor: pointer;
                padding: 10px 30px;
                margin: 0 auto;
                display: block;
                border: 0;
    
                box-shadow: 0px 0px 15px -3px #000000;
                border-radius: 1rem;
                font-size: 1.2rem;
                background: linear-gradient(to right, #1c1947, #05532c);
                font-weight: 600;
                color: white;
            }
        }

    }
`