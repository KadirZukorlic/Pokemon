import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//pages
import Homepage from './pages/Homepage/Homepage';
import PokemonDetails from './components/PokemonDetails/PokemonDetails';

import './default.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Homepage />} />
        <Route path="/:pokemonName" exact element={<PokemonDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
