import React from 'react';

import { CarouselContainer, CarouselImage } from './styles';

const imageArr = ['1.jpeg', '2.jpeg', '3.jpeg', '4.jpeg', '5.jpeg'];

const Carousel = () => {
  return (
    <CarouselContainer>
      {imageArr.map((image) => {
        return (
          <CarouselImage
            key={Math.random()}
            src={`/assets/${image}`}
          />
        );
      })}
    </CarouselContainer>
  );
};

export default Carousel;
