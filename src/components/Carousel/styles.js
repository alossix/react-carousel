import styled from 'styled-components';

export const CarouselContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 80vw;
  height: 50vh;
  margin: auto;
  background-color: lightblue;
`;

export const CarouselImage = styled.div`
  height: 100%;
  width: 100%;
  background: url(${(p) => p.src}) no-repeat center/cover;
`;
