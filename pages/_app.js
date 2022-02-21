import { createGlobalStyle } from 'styled-components'

import {AuthProvider} from '../contexts/AuthContext'

import Footer from '../components/Layout/Footer/footerIndex'

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    *, input, button {
        font-family: 'Roboto', sans-serif;
    }

    a {
        text-decoration: none;
    }

    html, body{
      background: var(--mainBg);
    }

    :root {
        --mainBg: #1c1c1c;
        --altBg: #111;
        --grayFont: #8f8f8f;
        --hover-color: color 200ms ease-out, border 100ms ease-out;
    }

    ::-webkit-scrollbar {
        width: 17px;
        background: transparent;
    }

    ::-webkit-scrollbar-track{
        background: #111;
        border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb {
        background: linear-gradient(#2f2a80, #0a5731);
        border: 4px solid #111;
        border-radius: 10px;
    }
`

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <GlobalStyle/>
      <Component {...pageProps} />
      <Footer />
    </AuthProvider>
  )
}