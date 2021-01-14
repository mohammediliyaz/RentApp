import styled from "styled-components";

export const Div = styled.div`
  display: grid;

  grid-row-start: 1;
  grid-row-end: 3;
  height: 600px;
  box-sizing: border-box;
  border: 1px solid blue;
  max-width: 450px;
  padding: 1px;
  @media all and (max-width: 425px) {
    width: 100%;
  }
`;

export const P = styled.p`
  word-wrap: break-word;
  border: 1px solid red;
  width: 32.5vw;
  height: 100px;
`;
