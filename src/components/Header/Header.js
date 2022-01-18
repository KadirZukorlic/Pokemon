import React from 'react';
import './styles.scss';

import { useDispatch } from 'react-redux';
import { searchTerm } from '../../redux/Search/searchActions';

import FormInput from '../FormInput/FormInput';
import pokeball from './../../assets/pokeball.png';

const Header = () => {
  const dispatch = useDispatch();

  return (
    <div className="header">
      <img src={pokeball} alt="pokemon logo" />
      <FormInput
        type="text"
        placeholder="Search..."
        onChange={(event) => dispatch(searchTerm(event.target.value))}
      />
    </div>
  );
};

export default Header;
