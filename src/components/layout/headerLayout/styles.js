import styled from "styled-components";

export const ContentWrapper = styled.div`
display: none;
background-color: #e4e7eb;
height: 70px;
width: 100%;

box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);

& .hamburguer {
  background-color: #555;
  width: 30px;
  height: 3px;
  margin: 0 0 4px 0;
}

@media (max-width: 1250px) {
  display: flex;
  align-items: center;
  justify-content: space-between; /* Melhor alinhamento */
  padding: 0 20px; /* Para evitar que os itens fiquem colados na borda */

  & .contentWrapper-hamburguer {
    margin-left: 23px;
  }
  }
`;