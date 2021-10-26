import React from "react";

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
                    <div key={pokemon.id} >
                        {pokemon.text}
                    </div>
                </div>
                <li>
                    {/* <Link to=''></Link> */}
                </li>
            </div>
        </div>

    ))

}


export default PokemonList