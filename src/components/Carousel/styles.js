import styled from 'styled-components';

export const CarouselContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80vw;
  height: 50vh;
  margin: auto;
  position: relative;
`;

export const CarouselImage = styled.div`
  height: 100%;
  width: 80%;
  background: url(${(p) => p.src}) no-repeat center/cover;
`;

export const ButtonLeft = styled.div`
  height: 5vh;
  width: 2vw;
  background: url(${(p) => p.src}) no-repeat center/contain;
  background-color: lightgray;
  position: absolute;
  left: 0;

  &:hover {
    cursor: pointer;
  }
`;

export const ButtonRight = styled.div`
  height: 5vh;
  width: 2vw;
  background: url(${(p) => p.src}) no-repeat center/contain;
  background-color: lightgray;
  position: absolute;
  right: 0;

  &:hover {
    cursor: pointer;
  }
`;
