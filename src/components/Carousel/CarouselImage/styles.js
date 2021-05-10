import styled from 'styled-components';

export const Image = styled.div`
  display: flex;
  height: 100%;
  min-width: 100%;
  width: 100%;
  background: url(${(p) => p.src}) no-repeat center/cover;
  border-right: 5px solid black;
  border-left: 5px solid black;

  &.moveleft {
    transform: translateX(100%);
    transition: 1.8s ease;
  }
  &.moveright {
    transform: translateX(-100%);
    transition: 1.8s ease;
  }

  &:hover {
    cursor: grabbing;
  }
`;
