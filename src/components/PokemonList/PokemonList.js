import React, { useState, useEffect } from 'react';
import { BounceLoader } from 'react-spinners';
import { css } from '@emotion/react';

import Button from './../Button/Button';
import PokemonThumbnail from '../PokemonThumbnail/PokemonThumbnail';

import './styles.scss';

const loaderCSS = css`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [baseUrl, setBaseUrl] = useState('https://pokeapi.co/api/v2/pokemon');
  const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon');
  const [isLoading, setIsLoading] = useState(false);
  const [spinnerColor, setSpinnerColor] = useState('#3b4cca');

  const getAllPokemons = async () => {
    const url = 'https://pokeapi.co/api/v2/pokemon?offset=300&limit=100'; // limit=1118 to fetch all of them

    setIsLoading(true);

    const res = await fetch(url);
    const data = await res.json();

    console.log(data, 'data svi pokemoni');

    const configAllPokemons = (results) => {
      results.forEach(async (pokemon) => {
        const res = await fetch(`${baseUrl}/${pokemon.name}`);
        const data = await res.json();
        setPokemonList((prevPokemons) => [...prevPokemons, data]);
        await pokemonList.sort((a, b) => a.id - b.id);
      });
    };
    configAllPokemons(data.results);
    setIsLoading(false);
  };

  const getPokemons = async () => {
    setIsLoading(true);

    const res = await fetch(loadMore);
    const data = await res.json();

    setLoadMore(data.next);

    const configPokemonObject = (results) => {
      results.forEach(async (pokemon) => {
        const res = await fetch(`${baseUrl}/${pokemon.name}`);
        const data = await res.json();
        setPokemonList((prevPokemons) => [...prevPokemons, data]);
        await pokemonList.sort((a, b) => a.id - b.id);
      });
    };
    configPokemonObject(data.results);
    setIsLoading(false);
  };

  useEffect(() => {
    getPokemons();
  }, []);

  console.log(pokemonList, 'poke lista');

  return (
    <>
      <BounceLoader
        color={spinnerColor}
        loading={isLoading}
        size={150}
        css={loaderCSS}
      />
      <div className="wrapper">
        <div className="pokemon__wrapper">
          <div className="pokemonList__wrapper">
            {pokemonList.map((pokemonStats, index) => (
              <PokemonThumbnail
                key={index}
                id={pokemonStats.id}
                image={pokemonStats.sprites.other.dream_world.front_default}
                name={pokemonStats.name}
                type={pokemonStats.types[0].type.name}
              />
            ))}
          </div>
        </div>
        <div className="buttons">
          <Button onClick={() => getPokemons()}>Load more</Button>
          <Button onClick={() => getAllPokemons()}>Get All Pokemons</Button>
        </div>
      </div>
    </>
  );
};
export default PokemonList;
