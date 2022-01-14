import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//pages
import Homepage from './pages/Homepage/Homepage';

import './default.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
