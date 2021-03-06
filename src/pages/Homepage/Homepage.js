import React from 'react';

//components
import Header from '../../components/Header/Header';
import PokemonList from '../../components/PokemonList/PokemonList';

const Homepage = () => {
    return (
        <div>
            <Header />
            <PokemonList />
        </div>
    )
}

export default Homepage
