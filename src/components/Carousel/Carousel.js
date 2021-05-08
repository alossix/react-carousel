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
  // const [imageNumber, setImageNumber] = useState(0);
  const [centerImageNum, setCenterImageNum] = useState(0);
  const [slidingLeft, setSlidingLeft] = useState(false);
  const [slidingRight, setSlidingRight] = useState(false);

  let centerImage = imageArr[centerImageNum];

  let leftImage =
    centerImage === imageArr[0]
      ? imageArr[imageArr.length - 1]
      : imageArr[centerImage - 1];

  let rightImage =
    centerImage === imageArr.length - 1
      ? imageArr[0]
      : imageArr[centerImage + 1];

  const decrementHandler = () => {
    setSlidingLeft(true);
    centerImageNum === 0
      ? setCenterImageNum(imageArr.length - 1)
      : setCenterImageNum((n) => n - 1);
    console.log(centerImage);
    setSlidingLeft(false);
  };

  const incrementHandler = () => {
    setSlidingRight(true);
    centerImageNum === imageArr.length - 1
      ? setCenterImageNum(0)
      : setCenterImageNum((n) => n + 1);
    console.log(centerImage);
    setSlidingRight(false);
  };

  return (
    <>
      <CarouselContainer>
        <ButtonLeft
          onClick={decrementHandler}
          src={`/assets/arrow-left.svg`}
        />
        <CarouselImage
          className={
            (slidingLeft && 'moveleft') ||
            (slidingRight && 'moveright')
          }
          src={`/assets/${centerImage}`}
        />
        <ButtonRight
          onClick={incrementHandler}
          src={`/assets/arrow-right.svg`}
        />
      </CarouselContainer>
    </>
  );
};

export default Carousel;
