import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Close } from '@styled-icons/material-rounded/Close'

import { CardsWrapper } from '../../../pageStyles/pacotesStyle'
import Card from '../../Page-Pacotes/Card/cardIndex'

const PackagesController = () => {
    const [hasimg, setHasimg] = useState(0)
    const [image, setImage] = useState()
    const [values, setValues] = useState({
        title: "", price: ""
    })
    const [jsx, setJsx] = useState()

    const handleImage = (e) => {
        setImage(e.target.files[0])
        setHasimg(e.target.files.length)
    }

    const handleChange = (e) => {
        setValues(prevValues => ({
            ...prevValues,
            [e.target.name]: e.target.value
        }))
    }

    const submitPackage = (e) => {
        e.preventDefault()

        var formData = new FormData()

        formData.append("file", image)
        formData.append("title", values.title)
        formData.append("price", values.price)

        axios.post("/api/package", formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            },
        }).then(() => listCards())

        e.target.firstChild.children[1].value = null
        setImage()
        setHasimg(0)
        setValues({ title: "", price: "" })
    }

    const removePackage = (id) => {
        var formData = new FormData()

        formData.append("id", id)

        axios.delete("/api/package", { data: formData }, {
            headers: {
                "Content-Type": "multipart/form-data"
            },
        }).then(() => listCards())
    }

    const listCards = async () => {
        const data = (await axios.get("api/package")).data
        setJsx(data.map((pacote, index) =>
            <Card img={pacote.image} text={pacote.title} price={`R$ ${pacote.price}`} key={index}>
                <div onClick={() => removePackage(pacote._id, index)}><Close /></div>
            </Card>
        ))
    }

    useEffect(() => {
        listCards()
    }, [])

    return (
        <>
            <section>
                <h1>Pacote</h1>
                <form onSubmit={(e) => submitPackage(e)}>
                    <div>
                        <label
                            className={`fileLabel ${hasimg != 0 ? 'green' : null}`}
                            htmlFor='imagemPacote'
                        >
                            Selecione a imagem*
                        </label>

                        <input
                            id='imagemPacote'
                            type="file"
                            accept='image/*'
                            onChange={(e) => handleImage(e)}
                            required
                        />
                        <label>
                            {hasimg == 0 ? "Nenhuma imagem selecionada" : `Imagem selecionada`}
                        </label>
                    </div>

                    <label>Título*</label>
                    <input
                        type="text"
                        name="title"
                        placeholder='Insira o título'
                        onChange={(e) => handleChange(e)}
                        value={values.title}
                        required
                    />

                    <label>Preço*</label>
                    <input
                        type="text"
                        name="price"
                        placeholder='Insira o preço'
                        onChange={(e) => handleChange(e)}
                        value={values.price}
                        required
                    />

                    <input
                        type='submit'
                        value="Enviar"
                    />
                </form>
            </section>

            <CardsWrapper min={0}>
                {jsx}
            </CardsWrapper>
        </>
    )
}

export default PackagesController