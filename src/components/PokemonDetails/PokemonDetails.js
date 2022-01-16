import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import './styles.scss';

const PokemonDetails = () => {
  const { pokemonName } = useParams();
  const [pokemon, setPokemon] = useState([]);

  const GetPokemon = async () => {
    try {
      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
      );
      const data = await res.json();

      setPokemon([data]);
    } catch (error) {
      // console.log(error)
    }
  };

  console.log(pokemon);

  useEffect(() => {
    GetPokemon();
  }, []);

  return (
    <div className="pokemonDetails__wrapper">
      {pokemon.map((pokemonStats, index) => (
        <div className="details__wrapper" key={index}>
          <img
            src={pokemonStats.sprites.other.dream_world.front_default}
            alt="Pokemon details"
          />
          <h1>{pokemonStats.name}</h1>
          <h3>Type: {pokemonStats.types[0].type.name}</h3>
          <h3>Weight: {pokemonStats.weight}</h3>
        </div>
      ))}
    </div>
  );
};

export default PokemonDetails;
