import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Close } from '@styled-icons/material-rounded/Close'

import { ImagesContainer } from '../GalleryController/style'

const HeroController = () => {
    const [slidenum, setSlidenum] = useState(0)
    const [slides, setSlides] = useState()
    const [jsx, setJsx] = useState()

    const handleChange = (e) => {
        setSlides(e.target.files)
        setSlidenum(e.target.files.length)
    }

    const submitSlides = (e) => {
        e.preventDefault()

        var formData = new FormData()

        for (let i = 0; i < slidenum; i++) {
            formData.append("files", slides[i])
        }

        axios.post("/api/hero", formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            },
        }).then(() => listSlides())

        e.target.firstChild.children[1].value = null
        setSlides()
        setSlidenum(0)
    }

    const removeSlides = (id) => {
        var formData = new FormData()

        formData.append("id", id)

        axios.delete("/api/hero", { data: formData }, {
            headers: {
                "Content-Type": "multipart/form-data"
            },
        }).then(() => listSlides())
    }

    const listSlides = async () => {
        const data = (await axios.get("api/hero")).data
        setJsx(data.map((image, index) =>
            <figure key={index}>
                <img src={image.url} />
                <div onClick={() => removeSlides(image._id, index)}><Close /></div>
            </figure>
        ))
    }

    useEffect(() => {
        listSlides()
    }, [])

    return (
        <>
            <section>
                <h1>Imagens Slideshow</h1>
                <form onSubmit={(e) => submitSlides(e)}>
                    <div>
                        <label
                            className={`clickable fileLabel ${slidenum != 0 ? 'green' : null}`}
                            htmlFor='sliderImages'
                        >
                            Selecione as imagens*
                        </label>

                        <input
                            id="sliderImages"
                            type="file"
                            accept='image/*'
                            onChange={(e) => handleChange(e)}
                            multiple
                            required
                        />
                        <label>
                            {slidenum == 0 ? "Nenhuma imagem selecionada" : slidenum == 1 ? '1 imagem selecionada' : `${slidenum} imagens selecionadas`}
                        </label>
                    </div>

                    <input
                        type='submit'
                        value="Enviar"
                    />
                </form>
            </section>

            <ImagesContainer max={250}>
                {jsx}
            </ImagesContainer>
        </>
    )
}

export default HeroController