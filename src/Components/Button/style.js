import styled from "styled-components";

export const Button = styled.button`
  background-color: rgb(173, 172, 234);
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
  &:active {
    transition: transform 0.25s ease;
    transform: scale(2);
  }

  &:hover {
    background-color: #7d7de6;
    cursor: pointer;
  }
  @media all and (max-width: 425px) {
    width: 15vw;
    font-size: 3vw;
    &:active {
      transition: transform 0.2s ease;
      transform: scale(1.2);
    }
  }
`;
