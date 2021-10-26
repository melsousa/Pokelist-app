import React, { useState } from 'react'

import '../layout/Pokemon.css'

const PokemonForm = props => {

    const [input, setInput] = useState('')
    const [file, setFile] = useState(null)


    const handleChange = e => {
        //setando o atual valor de input
        setInput(e.target.value)

    }
    const handleChangeF = e => {
        if (e.target.files && e.target.files[0]) {
            //setando o atual valor de file em um novo Objeto URL 
            //que recebe arq do tipo file
            setFile(URL.createObjectURL(e.target.files[0]))

        }

    }
    const handleSubmit = e => {
        // preventDefault --> evitar o comportamento padrão do form
        e.preventDefault()

        props.onSubmit({
            id: Math.floor(Math.random() * 10000), //gerando um id
            text: input, //valor do input/text
            file: file   //valor do input/file

        })

        setInput('')
        setFile(null)

    }



    return (

        <div className='main'>

            <form className="pokemon-form" onSubmit={handleSubmit}>

                <input type="text" value={input}
                    placeholder="Nome do pokémon" onChange={handleChange} required />

                <label for='img-input' className="file-label" >Adicionar Imagem</label>
                <input type="file" id="img-input" onChange={handleChangeF} ref-setter={file}  />


                <button className="pokemon-button"></button>


            </form>

        </div>

    )

}

export default PokemonForm
