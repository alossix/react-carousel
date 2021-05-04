import React, { useState } from 'react';

import {
  CarouselContainer,
  CarouselImage,
  ButtonLeft,
  ButtonRight,
} from './styles';

// Example set of images
const imageArr = ['1.jpeg', '2.jpeg', '3.jpeg', '4.jpeg', '5.jpeg'];

const Carousel = () => {
  const [imageNumber, setImageNumber] = useState(0);
  let selectedImage = imageArr[imageNumber];

  const decrementHandler = () => {
    imageNumber === 0
      ? setImageNumber(imageArr.length - 1)
      : setImageNumber((num) => num - 1);
  };
  const incrementHandler = () => {
    imageNumber >= imageArr.length - 1
      ? setImageNumber(0)
      : setImageNumber((num) => num + 1);
  };

  return (
    <>
      <CarouselContainer>
        <ButtonLeft
          onClick={decrementHandler}
          src={`/assets/arrow-left.svg`}
        />
        <CarouselImage src={`/assets/${selectedImage}`} />
        <ButtonRight
          onClick={incrementHandler}
          src={`/assets/arrow-right.svg`}
        />
      </CarouselContainer>
    </>
  );
};

export default Carousel;
