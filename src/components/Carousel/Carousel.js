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
  const [xPosition, setXPosition] = useState(50);
  const [touchStartLocation, setTouchStartLocation] =
    useState(xPosition);
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

  const handleTouchStart = (e) => {
    const firstTouchEvent = e.touches[0];
    const locationX = firstTouchEvent.clientX;
    setTouchStartLocation(locationX);
  };

  const handleTouchEnd = (e) => {
    const firstTouchEvent = e.changedTouches[0];
    const locationX = firstTouchEvent.clientX;
    const differencesX = touchStartLocation - locationX;
    const newPositionX = xPosition + -1 * differencesX * 0.05;
    console.log(`firstTouchEvent: `, firstTouchEvent);
    console.log(`touchStartLocation: `, touchStartLocation);
    console.log(`locationX: `, locationX);
    console.log(`differencesX:`, differencesX);
    console.log(`newPositionX: `, newPositionX);
    setXPosition(newPositionX);
    console.log(xPosition + '%');
  };

  const classNameProps = {
    className:
      (slidingLeft && 'moveleft') || (slidingRight && 'moveright'),
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
        src={`/assets/arrow-left.png`}
      />
      <CarouselImage
        {...classNameProps}
        src={`/assets/${leftImage}`}
      />
      <CarouselImage
        {...classNameProps}
        src={`/assets/${centerImage}`}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        style={{ left: xPosition + '%' }}
      />
      <CarouselImage
        {...classNameProps}
        src={`/assets/${rightImage}`}
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
