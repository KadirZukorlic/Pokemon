import React, { useState, useEffect } from 'react';
import './styles.scss';

import axios from 'axios';

const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [loadMore, setLoadMore] = useState(
    'https://pokeapi.co/api/v2/pokemon?offset=20&limit=20'
  );
  const [isLoading, setIsLoading] = useState(false);

  const getPokemons = async () => {
    setIsLoading(true);

    const url = 'https://pokeapi.co/api/v2/pokemon';

    const data = await axios
      .get(url)
      .then((res) => {
        return res.data.results;
      })
      .catch((err) => {
        // console.log(err)
      });
    setPokemonList(data);
    setIsLoading(false);
  };

  useEffect(() => {
    getPokemons();
  }, []);

  console.log(pokemonList);

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <div>
      {pokemonList.map((pokemon) => (
        <div className="pokemonName" key={pokemon.url}>
          <h1>{pokemon.name}</h1>
        </div>
      ))}
    </div>
  );
};

export default PokemonList;
