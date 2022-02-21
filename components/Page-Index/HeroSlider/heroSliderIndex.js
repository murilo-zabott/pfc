import React, { useState, useEffect } from 'react';
import axios from 'axios'

import { Container, Carousel, Imagem, Title, Desc, Button, SliderController, Images } from './heroSliderStyle'
import { ChevronLeftCircle, ChevronRightCircle } from 'styled-icons/boxicons-regular';

const HeroSlider = () => {
    //#region Slideshow
    const [urls, setUrls] = useState(0)
    const size = urls.length
    const lastSliderIndex = (size + 1)
    const [slide, setSlide] = useState(1)
    const [img, setImg] = useState(1)
    const [animate, setAnimate] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => handleClick(true), 10000)
        return () => clearTimeout(timer)
    }, [slide])

    const handleClick = (bool) => {
        if (!bool && slide == 0) return
        if (bool && slide == lastSliderIndex) return
        setAnimate(true)
        bool ? setSlide(slide + 1) : setSlide(slide - 1)
    }

    const slideEnd = () => {
        if (slide == 0) {
            setAnimate(false)
            setSlide(size)
            return setImg(size)
        }
        if (slide == lastSliderIndex) {
            setAnimate(false)
            setSlide(1)
            return setImg(1)
        }
        setImg(slide)
    }
    //#endregion

    //#region Scrollar p/ sobre
    const scrollDown = () => {
        window.scrollTo({ top: 0.9 * window.innerHeight, behavior: 'smooth' })
    }
    //#endregion

    //#region Mapear imagens
    const [imagens, setImagens] = useState()

    useEffect(async () => {
        const data = (await axios.get("/api/hero")).data
        setUrls(data)
        const imgs = data.map((image, index) =>
            <Imagem key={index} src={image.url} animationNumber={img == index + 1 ? index % 3 : null} />
        )
        setImagens(<>
            <Imagem key='0' src={data[data.length - 1].url} />
            {imgs}
            <Imagem key={lastSliderIndex} src={data[0].url} />
        </>)
    }, [])


    //#endregion

    return (
        <Container>
            <Carousel slidePos={slide} onTransitionEnd={slideEnd} animated={animate}>

                {imagens}


            </Carousel>

            <Title>Produtora Go</Title>
            <Desc>Trabalhos em vários segmentos da área gráfica. Sempre dispostos a atender as demandas dos mais diversos clientes.</Desc>
            <Button onClick={scrollDown}>Saiba mais</Button>

            <SliderController onClick={() => handleClick(false)} left>
                <ChevronLeftCircle />
            </SliderController>

            <SliderController onClick={() => handleClick(true)} right>
                <ChevronRightCircle />
            </SliderController>
        </Container>
    )
}

export default HeroSlider