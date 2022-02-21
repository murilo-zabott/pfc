import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Close } from '@styled-icons/material-rounded/Close'

import { ImagesContainer } from './style'

const GalleryController = () => {
    const [imgnum, setImgnum] = useState(0)
    const [images, setImages] = useState([null])
    const [jsx, setJsx] = useState()

    const handleChange = (e) => {
        setImages(e.target.files)
        setImgnum(e.target.files.length)
    }

    const submitGallery = (e) => {
        e.preventDefault()
        var formData = new FormData()

        for (let i = 0; i < imgnum; i++) {
            formData.append("files", images[i])
        }

        axios.post("/api/gallery", formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            },
        }).then(() => listImagens())

        e.target.firstChild.children[1].value = null
        setImages(null)
        setImgnum(0)
    }

    const removeGallery = (id) => {
        var formData = new FormData()

        formData.append("id", id)

        axios.delete("/api/gallery", { data: formData }, {
            headers: {
                "Content-Type": "multipart/form-data"
            },
        }).then(() => listImagens())
    }

    const listImagens = async () => {
        const data = (await axios.get("api/gallery")).data
        setJsx(data.map((image, index) =>
            <figure min={400} key={index}>
                <img src={image.url} />
                <div onClick={() => removeGallery(image._id)}><Close /></div>
            </figure>
        ))
    }

    useEffect(() => {
        listImagens()
    }, [])

    return (
        <>
            <section>
                <h1>Imagens Galeria</h1>
                <form onSubmit={(e) => submitGallery(e)}>
                    <div>
                        <label
                            className={`clickable fileLabel ${imgnum != 0 ? 'green' : null}`}
                            htmlFor='galleryImages'
                        >
                            Selecione as imagens*
                        </label>

                        <input
                            id="galleryImages"
                            type="file"
                            accept='image/*'
                            onChange={(e) => handleChange(e)}
                            multiple
                            required
                        />

                        <label>
                            {imgnum == 0 ? "Nenhuma imagem selecionada" : imgnum == 1 ? '1 imagem selecionada' : `${imgnum} imagens selecionadas`}
                        </label>
                    </div>

                    <input
                        type='submit'
                        value="Enviar"
                    />
                </form>
            </section>

            <ImagesContainer max={150}>
                {jsx}
            </ImagesContainer>
        </>
    )
}

export default GalleryController