import styled from "styled-components";

export const ContainerLayout = styled.div`
display: flex;

@media (max-width: 1250px) {

flex-direction: column;
}
`;

export const Container = styled.div`
max-width: 950px;
margin: 0 auto; /* Centraliza o container horizontalmente */
padding: 0 30px 0 30px; /* Opcional: ajuste de padding para um pouco de espaçamento interno */
`;
