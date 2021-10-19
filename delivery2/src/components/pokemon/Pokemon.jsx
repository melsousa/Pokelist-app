import React, { useState } from "react";
import PokemonForm from "./PokemonForm";
import PokemonList from "./PokemonList";

import '../layout/Pokemon.css'

const Pokemon = () => {
    const [pokemons, setPokemons] = useState([])

    //adicionar Pokémons
    const addPokemon = pokemon => {
        //verificando se text está vazia ou com espaços em branco
        if (!pokemon.text || /^\s*$/.test(pokemon.text)) {
            return
        }
        //pegando todos os valores e atributos de pokemons 
        //e passando para a constante
        const newPokemons = [pokemon, ...pokemons]

        //setando os valores
        setPokemons(newPokemons)
    }

    return (
        <div >
            <PokemonForm onSubmit={addPokemon} />
            <div className="MainPokemon">
                <PokemonList pokemons={pokemons} />
            </div>
        </div>
    )
}

export default Pokemon