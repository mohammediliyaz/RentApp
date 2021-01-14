import styled from "styled-components";

export const Div = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: auto auto;
  grid-row-gap: 2px;
  grid-column-gap: 5px;
  border: 1px solid black;
  margin: 1% 15% 2% 15%;
  height: 100%;
  @media all and (max-width: 425px) {
    grid-template-columns: auto;
    margin: 1% 2% 1% 2%;
  }
`;

export const Buttonbox = styled.div`
  margin: 1% 15% -1% 15%;
  display: flex;

  @media all and (max-width: 425px) {
    margin: 0 2% -1% 2%;
  }
`;

export const P = styled.p`
  margin: 1% 15% 1% 15%;

  @media all and (max-width: 425px) {
    margin: 1% 2% 3% 2%;
  }
`;
