import React from 'react';
import './styles.scss';

import { useDispatch } from 'react-redux';
import { searchTerm } from '../../redux/Search/searchActions';

import FormInput from '../FormInput/FormInput';
import Button from '../Button/Button';
// import pokemonLogo from './../../assets/pokemonlogo.png';

const Header = () => {
    const dispatch = useDispatch();



    return (
        <div className="header">
            {/* <img src={pokemonLogo} alt="pokemon logo"/> */}
            <FormInput 
                type="text"
                placeholder='Search...'
                onChange={(event) => dispatch(searchTerm(event.target.value))}
            />
        </div>
    )
}

export default Header
