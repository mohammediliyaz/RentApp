import styled from "styled-components";

export const Div = styled.div`
  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.3)
  );
  border-radius: 1rem;
  grid-row-start: 1;

  grid-row-end: 3;
  height: 600px;
  box-sizing: border-box;

  max-width: 450px;
  padding: 1px;
  @media all and (max-width: 425px) {
    width: 100%;
  }
`;

export const P = styled.p`
  word-wrap: break-word;

  width: 32.5vw;

  @media all and (max-width: 425px) {
    width: 30vh;
  }
`;
