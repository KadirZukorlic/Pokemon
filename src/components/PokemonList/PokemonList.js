import React, { useState, useEffect } from 'react';
import { BounceLoader } from 'react-spinners';
import { css } from '@emotion/react';

import Button from './../Button/Button';
import PokemonThumbnail from '../PokemonThumbnail/PokemonThumbnail';

import './styles.scss';

const loaderCSS = css`position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);`;

const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [loadMore, setLoadMore] = useState(
    'https://pokeapi.co/api/v2/pokemon?offset=20&limit=20'
  );
  const [isLoading, setIsLoading] = useState(false);
  const [spinnerColor, setSpinnerColor] = useState('#ffffff');

  const getAllPokemons = async () => {
    const url = 'https://pokeapi.co/api/v2/pokemon';

    setIsLoading(true);

    const res = await fetch(loadMore);
    const data = await res.json();

    setLoadMore(data.next);

    function configPokemonObject(results) {
      results.forEach(async (pokemon) => {
        const res = await fetch(`${url}/${pokemon.name}`);
        const data = await res.json();
        setPokemonList((currentList) => [...currentList, data]);
        await pokemonList.sort((a, b) => a.id - b.id);
      });
    }
    configPokemonObject(data.results);
    setIsLoading(false);
  };

  useEffect(() => {
    getAllPokemons();
  }, []);

  return (
    <>
      <BounceLoader
        color={'#3b4cca'}
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
          <Button onClick={() => getAllPokemons()}>Load more</Button>
        </div>
      </div>
    </>
  );
};
export default PokemonList;
