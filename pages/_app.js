import { createGlobalStyle } from 'styled-components'
import { ThemeProvider } from 'theme-ui'

import Footer from '@/components/Footer/footerIndex'

export default function App({ Component, pageProps }) {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Component {...pageProps} />
			<Footer />
		</ThemeProvider>
	)
}

const theme = {
	fonts: {
		body: 'Roboto, sans-serif',
		heading: 'Roboto, sans-serif',
		monospace: 'monospace',
	},
	colors: {
		text: '#000',
		background: '#fff',
		primary: '#33e',
	},
}

const GlobalStyle = createGlobalStyle`
  html{
    font-size: 100%;
    font-family: 'Lato', sans-serif;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: none;
    color: inherit;
    line-height: 1;
    text-transform: inherit;
    font-size: inherit;
    font-family: inherit;
    font-weight: inherit;
  }
  
  body.lock{
    overflow-y: hidden;
  }

  a {
    text-decoration: none;
  }

  :root {
    //cores
    --black: #131313;
    --gray: #8f8f8f;
    /* --produtora-blue: #332ab1;
    --produtora-green: #0e884b; */
    /* --produtora-blue: #2a2396;
    --produtora-green: #084f2b; */
    --produtora-blue: #29228f;
    --produtora-green: #0a6336;
    
    //transições
    --hover-color: color 200ms ease-out, border 200ms ease-out, filter 200ms ease-out;

    //tamanhos de tela
    --big-screen: 1024px;
  }
`
