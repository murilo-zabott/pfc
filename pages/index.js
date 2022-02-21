import Head from 'next/head'
import Header from '../components/Layout/Header/headerIndex'

import HeroSlider from '../components/Page-Index/HeroSlider/heroSliderIndex';
import axios from 'axios'

const Home = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Header />
      <HeroSlider/>
      <div style={{ height: "60vh" }}></div>
    </>
  );
}

export default Home