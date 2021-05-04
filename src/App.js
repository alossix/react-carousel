import React from 'react';

import { Background } from './styles.js';

import Carousel from './components/Carousel/Carousel';

const App = () => {
  return (
    <Background>
      <h1>Carousel Component for Scandiweb</h1>
      <Carousel></Carousel>
    </Background>
  );
};

export default App;
