import Head from 'next/head'
import Script from 'next/script'

import Header from '@/components/Header/headerIndex'
import { Container } from '@/pageStyles/indexStyle'
import HeroSlider from '@/components/HeroSlider/heroIndex'

const Home = () => {
	return (
		<>
			<Head>
				<title>Produtora GO</title>
			</Head>

			<Header />
			<HeroSlider />

			<div style={{ height: '200vh' }}></div>
		</>
	)
}

export default Home
