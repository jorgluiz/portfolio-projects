import styled from "styled-components";

export const GridContainer = styled.div`
  display: grid;
  justify-content: center;
  padding-top: 30px; /* Substitui margin-top por padding-top */
 /*  grid-template-columns: 435px 435px;  Duas colunas com 435px cada ou grid-template-columns: repeat(2, 435px); Duas colunas em telas maiores
  row-gap: 30px; /* Espaçamento entre as linhas */
  column-gap: 30px; 
  row-gap: 30px;
  grid-template-columns: repeat(2, minmax(300px, 100%)); /* Responsivo */

   /* Responsividade para telas menores */
   @media (max-width: 750px) {
    grid-template-columns: 1fr; /* Uma coluna em telas menores */
   
  }

  & .img-projetos {
    display: block;
    max-width: 100%;
    height: 244px;
  };

  & .item {
    height: 244px;
    max-width: 100%;
    background-color: #ffffff;
    display: flex;
    border-top: 1px solid #ddd;

  & .sub-item {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0 0 0 15px;

    & .item-p {
      font-size: 16px;
    }
  };
  };
  };

  & .container-item {
    overflow: hidden; /* Evita que imagens transbordem */
    transition: transform 500ms ease-in-out; /* Transição suave para mover o sidebar */
    transform: translateY(0); /* Posição inicial */
    border-radius: 10px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5); /* sombra deslocada pra baixo */

  &:hover {
    box-shadow: 0 20px 40px rgba(16, 42, 67, 0.7); /* sombra maior e mais forte pra hover */
  }
    

  /* Transforma somente em telas maiores */
  @media (min-width: 750px) { /* Ajuste o valor conforme necessário */
    &:hover {
      transform: translateY(-30px);
      
    }
  }
};
`;

export const P = styled.p`

font-size: 16px;
line-height: 28px;
color: #323F4B;
margin-bottom: 20px;

& a {
  color: blue;
}
`;

export const H3 = styled.h3`

line-height: 28px;
margin-bottom: 20px;
`;

export const H4 = styled.ul`

font-weight: 600;
margin-bottom: 20px;
`;

export const Li = styled.li`

padding: 8px 0 8px 0;
`;

export const Ul = styled.ul`

margin-bottom: 20px;
`;
