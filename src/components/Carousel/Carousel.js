import React, { useState } from 'react';

import {
  CarouselContainer,
  CarouselImageLeft,
  CarouselImage,
  CarouselImageRight,
  ButtonLeft,
  ButtonRight,
} from './styles';

// Example set of images
const imageArr = ['1.jpeg', '2.jpeg', '3.jpeg', '4.jpeg', '5.jpeg'];

const Carousel = () => {
  const [centerImageNum, setCenterImageNum] = useState(0);
  const [slidingLeft, setSlidingLeft] = useState(false);
  const [slidingRight, setSlidingRight] = useState(false);

  let leftImage =
    centerImageNum === 0
      ? imageArr[imageArr.length - 1]
      : imageArr[centerImageNum - 1];
  let centerImage = imageArr[centerImageNum];
  let rightImage =
    centerImageNum === imageArr.length - 1
      ? imageArr[0]
      : imageArr[centerImageNum + 1];

  const leftButtonHandler = () => {
    setSlidingLeft(true);
    setTimeout(() => {
      setSlidingLeft(false);
      centerImageNum === 0
        ? setCenterImageNum(imageArr.length - 1)
        : setCenterImageNum((n) => n - 1);
    }, 2000);
  };

  const rightButtonHandler = () => {
    setSlidingRight(true);
    setTimeout(() => {
      setSlidingRight(false);
      centerImageNum === imageArr.length - 1
        ? setCenterImageNum(0)
        : setCenterImageNum((n) => n + 1);
    }, 2000);
  };

  return (
    <>
      <CarouselContainer>
        <ButtonLeft
          as="button"
          onClick={leftButtonHandler}
          src={`/assets/arrow-left.png`}
        />
        <CarouselImageLeft
          className={
            (slidingLeft && 'moveleft') ||
            (slidingRight && 'moveright')
          }
          src={`/assets/${leftImage}`}
          disabled={slidingLeft || slidingRight}
        />
        <CarouselImage
          className={
            (slidingLeft && 'moveleft') ||
            (slidingRight && 'moveright')
          }
          src={`/assets/${centerImage}`}
        />
        <CarouselImageRight
          className={
            (slidingLeft && 'moveleft') ||
            (slidingRight && 'moveright')
          }
          src={`/assets/${rightImage}`}
        />
        <ButtonRight
          as="button"
          onClick={rightButtonHandler}
          src={`/assets/arrow-right.png`}
          disabled={slidingLeft || slidingRight}
        />
      </CarouselContainer>
    </>
  );
};

export default Carousel;
