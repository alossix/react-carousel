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
  const [centerImageNum, setCenterImageNum] = useState(0);
  const [moving, setMoving] = useState(false);
  const [differencesX, setDifferencesX] = useState(0);
  const [touchStartLocation, setTouchStartLocation] = useState(0);
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
    }, 1200);
  };

  const rightButtonHandler = () => {
    setSlidingRight(true);
    setTimeout(() => {
      setSlidingRight(false);
      centerImageNum === imageArr.length - 1
        ? setCenterImageNum(0)
        : setCenterImageNum((n) => n + 1);
    }, 1200);
  };

  const touchStartHandler = (e) => {
    setTouchStartLocation(e.touches[0].clientX);
  };

  const touchMoveHandler = (e) => {
    setMoving(true);
    const newLocationX = e.touches[0].clientX;
    setDifferencesX(-1 * (touchStartLocation - newLocationX));
  };

  const touchEndHandler = (e) => {
    if (differencesX > 100) {
      centerImageNum === 0
        ? setCenterImageNum(imageArr.length - 1)
        : setCenterImageNum((n) => n - 1);
    } else if (differencesX < -100) {
      centerImageNum === imageArr.length - 1
        ? setCenterImageNum(0)
        : setCenterImageNum((n) => n + 1);
    }
    setDifferencesX(0);
    setTouchStartLocation(0);
    setMoving(false);
  };

  const classNameProps = {
    className:
      (slidingLeft && 'moveleft') ||
      (slidingRight && 'moveright') ||
      (moving && 'moving'),
  };

  const buttonProps = {
    as: 'button',
    disabled: slidingLeft || slidingRight,
  };

  return (
    <CarouselContainer>
      <ButtonLeft
        {...buttonProps}
        onClick={leftButtonHandler}
        src={`../../assets/arrow-left.png`}
      />
      <CarouselImage
        {...classNameProps}
        src={`/assets/${leftImage}`}
        style={{ transform: `translateX(${differencesX}px)` }}
      />
      <CarouselImage
        {...classNameProps}
        src={`/assets/${centerImage}`}
        onTouchStart={touchStartHandler}
        onTouchMove={touchMoveHandler}
        onTouchEnd={touchEndHandler}
        style={{ transform: `translateX(${differencesX}px)` }}
      />
      <CarouselImage
        {...classNameProps}
        src={`/assets/${rightImage}`}
        style={{ transform: `translateX(${differencesX}px)` }}
      />
      <ButtonRight
        {...buttonProps}
        onClick={rightButtonHandler}
        src={`/assets/arrow-right.png`}
      />
    </CarouselContainer>
  );
};

export default Carousel;
