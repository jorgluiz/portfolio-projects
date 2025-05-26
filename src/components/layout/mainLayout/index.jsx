import styled from "styled-components";

export const MainLayout = styled.div`
display: flex;
min-height: 100vh;
  

@media (max-width: 1250px) {

flex-direction: column;
}
`;

export const MainContent = styled.div`
width: 950px;
max-width: 950px;
margin: 0 auto; /* Centraliza o container horizontalmente */
padding: 20px 20px 0 20px;  /* ajuste de padding para um pouco de espaçamento interno */
border: 1px solid #ccc;
line-height: 1.6;
`;

