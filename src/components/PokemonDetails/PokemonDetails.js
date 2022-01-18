import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Modal from '../Modal/Modal';

import './styles.scss';

const PokemonDetails = () => {
  const { pokemonName } = useParams();
  const [pokemon, setPokemon] = useState([]);
  const [errors, setErrors] = useState([]);
  const [hideModal, setHideModal] = useState(true);
  const [type, setType] = useState('');
  const [pokemonListType, setPokemonListType] = useState([]);

  const toggleModal = () => setHideModal(!hideModal);

  const GetPokemon = async () => {
    try {
      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
      );
      const data = await res.json();

      setPokemon([data]);
    } catch (error) {
      // console.log(error)
      setErrors(['Ooops, something went wrong!']);
    }
  };

  const getPokemonsByType = async () => {
    try {
      const res = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
      const data = await res.json();

      setPokemonListType(data.pokemon);
    } catch (error) {
      // console.log(error)
    }
  };

  useEffect(() => {
    if (type) {
      getPokemonsByType();
    }
  });

  useEffect(() => {
    GetPokemon();
  }, []);

  const onTypeClickHandler = (pokemonType) => {
    setHideModal(false);
    setType(pokemonType);
  };

  const configModal = {
    hideModal,
    toggleModal,
    pokemonType: type,
  };

  return (
    <>
      <Modal {...configModal}>
        <h1
          style={{
            color: 'black',
            fontWeight: '700',
            textAlign: 'center',
            marginBottom: '1.8rem',
          }}
        >
          Pokemons of a {type} type!
        </h1>
        <div className="type__pokemons">
          {pokemonListType.map((pokemon, index) => {
            return (
              <div className="type__details" key={index}>
                <h3>{index + 1}.</h3>
                <h3>{pokemon.pokemon.name}</h3>
              </div>
            );
          })}
        </div>
      </Modal>
      <div className="pokemonDetails__wrapper">
        {errors.length > 0 && (
          <ul>
            {errors.map((error, index) => {
              return <li key={index}>{error}</li>;
            })}
          </ul>
        )}

        {pokemon.map((pokemonStats, index) => (
          <div className="details__wrapper" key={index}>
            <img
              src={pokemonStats.sprites.other.dream_world.front_default}
              alt="Pokemon details"
            />
            <h1>{pokemonStats.name}</h1>
            <h3
              onClick={() =>
                onTypeClickHandler(pokemonStats.types[0].type.name)
              }
              style={{ cursor: 'pointer' }}
            >
              Type: {pokemonStats.types[0].type.name}
            </h3>
            <h3>Weight: {pokemonStats.weight}</h3>
          </div>
        ))}
      </div>
    </>
  );
};

export default PokemonDetails;
