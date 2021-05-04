import styled from 'styled-components';

export const CarouselContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80vw;
  height: 50vh;
  margin: auto;
  background-color: lightgray;
  position: relative;
`;

export const CarouselImage = styled.div`
  height: 100%;
  width: 100%;
  background: url(${(p) => p.src}) no-repeat center/cover;
`;

export const ButtonLeft = styled.button`
  height: 5vh;
  width: 4vw;
  background: url(${(p) => p.src}) no-repeat center/contain;
    center/contain;
  background-color: black;
  border: none;
  position: absolute;
  left: 0;

  &:hover {
    cursor: pointer;
  }
`;

export const ButtonRight = styled.div`
  height: 5vh;
  width: 4vw;
  background: url(${(p) => p.src}) no-repeat center/contain;
  background-color: black;
  border: none;
  position: absolute;
  right: 0;
  z-index: 100;

  &:hover {
    cursor: pointer;
  }
`;
