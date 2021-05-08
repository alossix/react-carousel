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
export const CarouselImageLeft = styled.div`
  height: 100%;
  min-width: 100%;
  background: url(${(p) => p.src}) no-repeat center/cover;

  &.moveleft {
    transform: translateX(100%);
    transition: 2s ease;
  }
  &.moveright {
    transform: translateX(-100%);
    transition: 2s ease;
  }
`;
export const CarouselImage = styled.div`
  height: 100%;
  min-width: 100%;
  background: url(${(p) => p.src}) no-repeat center/cover;

  &.moveleft {
    transform: translateX(100%);
    transition: 2s ease;
  }
  &.moveright {
    transform: translateX(-100%);
    transition: 2s ease;
  }
`;

export const CarouselImageRight = styled.div`
  height: 100%;
  min-width: 100%;
  background: url(${(p) => p.src}) no-repeat center/cover;

  &.moveleft {
    transform: translateX(100%);
    transition: 2s ease;
  }
  &.moveright {
    transform: translateX(-100%);
    transition: 2s ease;
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
