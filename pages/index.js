import Head from 'next/head'
import Header from '../components/Layout/Header/headerIndex'

import HeroSlider from '../components/Page-Index/HeroSlider/heroSliderIndex';
import axios from 'axios'

const Home = ({ images }) => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Header />
      <HeroSlider pics={images} />
      <div style={{ height: "60vh" }}></div>
    </>
  );
}

export async function getStaticProps() {
  const url = `${process.env.BP}/api/hero`
  const images = (await axios.get(url)).data

  return {
    props: {
      images,
    },
  }
}

export default Home