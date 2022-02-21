import React, { useState } from 'react'
import axios from 'axios'

const UserController = () => {
    const [filenum, setFilenum] = useState(0)
    const [files, setFiles] = useState(null)
    const [values, setValues] = useState({
        email: '',
        phone: ''
    })

    const handleImages = (e) => {
        setFiles(e.target.files)
        setFilenum(e.target.files.length)
    }

    const handleChange = (e) => {
        setValues(prevValues => ({
            ...prevValues,
            [e.target.name]: e.target.value
        }))
    }

    const submitClientFiles = async (e) => {
        e.preventDefault()

        var formData = new FormData()

        for (let i = 0; i < filenum; i++) {
            formData.append("files", files[i])
        }

        formData.append("email", values.email)
        formData.append("phone", values.phone)

        axios.post("/api/purchase", formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            },
        })

        e.target.firstChild.children[1].value = null
        setFiles()
        setFilenum(0)
        setValues({ email: '', phone: '' })
    }

    return (
        <section>
            <h1>Compras do Cliente</h1>
            <form onSubmit={(e) => submitClientFiles(e)}>
                <div>
                    <label
                        className={`clickable fileLabel ${filenum != 0 ? 'green' : null}`}
                        htmlFor='clientFiles'
                    >
                        Selecione os arquivos*
                    </label>
                    <input
                        id="clientFiles"
                        type="file"
                        accept='image/*'
                        onChange={(e) => handleImages(e)}
                        multiple></input>
                    <label>
                        {filenum == 0 ? "Nenhum arquivo selecionado" : filenum == 1 ? '1 arquivo selecionado' : `${filenum} arquivos selecionados`}
                    </label>
                </div>

                <label>E-mail*</label>
                <input
                    type="email"
                    name="email"
                    placeholder="Insira o e-mail"
                    onChange={(e) => handleChange(e)}
                    value={values.email}
                    required
                />

                <label>Telefone com DDD*</label>
                <input
                    type="tel"
                    pattern="[0-9]{8,11}"
                    name="phone"
                    placeholder='Insira o telefone'
                    onChange={(e) => handleChange(e)}
                    value={values.phone}
                    required
                />
                <small>Apenas números</small>

                <input
                    type='submit'
                    value="Enviar"
                />
            </form>
        </section>
    )
}

export default UserController