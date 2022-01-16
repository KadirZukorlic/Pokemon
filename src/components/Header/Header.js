import React from 'react';
import './styles.scss';

import FormInput from '../FormInput/FormInput';
import Button from '../Button/Button';
// import pokemonLogo from './../../assets/pokemonlogo.png';

const Header = () => {
    return (
        <div className="header">
            {/* <img src={pokemonLogo} alt="pokemon logo"/> */}
            <FormInput />
            <Button>Search</Button>
        </div>
    )
}

export default Header
