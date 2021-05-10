import React from 'react';

import { Image } from './styles';

const CarouselImage = ({ src, slidingLeft, slidingRight }) => (
  <Image
    src={src}
    className={
      (slidingLeft && 'moveleft') || (slidingRight && 'moveright')
    }
  />
);

export default CarouselImage;
