import styled from 'styled-components';

export const CarouselContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80vw;
  height: 50vh;
  margin: auto;
  position: relative;
  overflow: hidden;
`;

export const CarouselImage = styled.div`
  height: 100%;
  min-width: 100%;
  background: url(${(p) => p.src}) no-repeat center/cover;

  &.moving {
    transform: translateX(${({ differencesX }) => differencesX});
    /* transition: all 0s linear; */
  }

  &.moveleft {
    transform: translateX(100%);
    transition: 1.5s ease;
  }
  &.moveright {
    transform: translateX(-100%);
    transition: 1.5s ease;
  }

  &:hover {
    cursor: grab;
  }

  &:hover .grabbing {
    cursor: grabbing;
  }
`;

export const ButtonLeft = styled.div`
  height: 5vh;
  width: 3vw;
  background: url(${(p) => p.src}) no-repeat center/contain;
  background-color: lightgray;
  position: absolute;
  left: 0;
  z-index: 2;
  border: none;

  &:hover {
    cursor: pointer;
  }
`;

export const ButtonRight = styled.div`
  height: 5vh;
  width: 3vw;
  background: url(${(p) => p.src}) no-repeat center/contain;
  background-color: lightgray;
  position: absolute;
  right: 0;
  border: none;

  &:hover {
    cursor: pointer;
  }
`;
