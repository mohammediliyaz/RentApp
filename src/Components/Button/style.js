import styled from "styled-components";

export const Button = styled.button`
  background-color: lightslategray;
  border-radius: 10px 10px 0 0;
  color: white;
  padding: 2px;
  border: 0;
  font-size: 1vw;
  width: 5vw;
  margin: 0 4px 0 0;
  &:focus {
    outline: none;
  }
  &:hover {
    background-color: red;
  }
  @media all and (max-width: 425px) {
    width: 15vw;
    font-size: 3vw;
  }
`;
