import styled from "styled-components";

export const Container = styled.div`

display: flex; 
justify-content: center; /* Centraliza horizontalmente */
width: 100%;

  /* transition: margin-left 0.5s ease-in-out;
  margin-left: ${({ isHamburguerOpen }) => (isHamburguerOpen ? "330px" : "0")};

  @media (max-width: 1250px) {
    margin-left: 0; /* Resetar o margin-left para telas menores */
  }  */
`;