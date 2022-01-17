import React, { useState, useEffect } from 'react';
import { BounceLoader } from 'react-spinners';
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Button from './../Button/Button';
import PokemonThumbnail from '../PokemonThumbnail/PokemonThumbnail';

import './styles.scss';

const loaderCSS = css`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const mapState = ({ search }) => ({
  searchTerm: search.searchTerm,
});

const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [baseUrl, setBaseUrl] = useState('https://pokeapi.co/api/v2/pokemon');
  const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon');
  const [isLoading, setIsLoading] = useState(false);
  const [spinnerColor, setSpinnerColor] = useState('#3b4cca');
  const { searchTerm } = useSelector(mapState);

  const getAllPokemons = async () => {
    const url = 'https://pokeapi.co/api/v2/pokemon?offset=300&limit=100'; // limit=1118 to fetch all of them

    setIsLoading(true);

    const res = await fetch(url);
    const data = await res.json();

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

  // error handle with try catch

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
            {pokemonList
              .filter((value) => {
                if (searchTerm === '') {
                  return value;
                } else if (
                  value.name.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                  return value;
                }
              })
              .map((pokemonStats, index) => (
                <Link to={`${pokemonStats.name}`}>
                  <PokemonThumbnail
                    key={index}
                    id={pokemonStats.id}
                    image={pokemonStats.sprites.other.dream_world.front_default}
                    name={pokemonStats.name}
                    type={pokemonStats.types[0].type.name}
                  />
                </Link>
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
