import React from "react";
import { Link } from "react-router-dom";
import {  Icon, List } from 'semantic-ui-react'

import '../layout/Card.css'

function PokemonList({ pokemons }) {

    const estilo = {

        backgroundColor: pokemons.color || '#E5E5E5'

    }
    return pokemons.map((pokemon, index) => (
        <div className="MainList">
            <div key={index}>
                <div className="Content" style={estilo}>
                    <img src={pokemon.file} alt="imagem" className="Image" />
                </div>
                <div className="Title">
                    <div >
                        {pokemon.text}
                    </div>
                </div>
                <List className='li-details'>
                    <span>
                        <Icon name='hand point right' />
                    </span>
                    <Link to={{
                        pathname: '/Details',
                        state: {
                            text: pokemon.text,
                            img: pokemon.file
                        }
                    }}>Detalhes extras</Link>
                </List>
            </div>
        </div>

    ))

}


export default PokemonList