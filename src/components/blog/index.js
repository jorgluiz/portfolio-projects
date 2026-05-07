// import styled, { css } from "styled-components";

// export const DiarioDevMainContainer = styled.div`

// width: 100%;
// padding: 20px 10px;

// & .h3Center-diarioDev {
// text-align: center;
// margin-bottom: 15px;
// padding-bottom: 15px;
// cursor: pointer;
// user-select: none;
// }

// & .h3Center-diarioDev:hover {
//   color: blue; /* azul mais escuro ao passar mouse */
// }

// & .h3Center-diarioDev.active {
//   color: blue;
//   text-decoration: none; /* pode tirar o underline se quiser */
// }

// /* & .EJS, .GitConnection, .MySQL {
// border-bottom: 1px solid #ccc;
// } */
// `;

// export const CollapsibleContent = styled.div`
//   overflow: hidden;
//   max-height: 0;
//   opacity: 0;
//   transition: max-height 0.5s ease, opacity 0.5s ease;

//   ${({ isOpen }) =>
//     isOpen &&
//     css`
//         max-height: none; /* permite altura natural do conteúdo */
//       opacity: 1;
//     `}
// `;

import styled, { css } from "styled-components";

export const DiarioDevMainContainer = styled.div`
  width: 100%;
  padding: 20px 10px;

  & .h3Center-diarioDev {
    /* 1. Define um limite de largura para alinhar as palavras */
    width: 100%;
    max-width: 500px; /* Ajuste este valor de acordo com o tamanho do seu maior título */
    
    /* 2. Centraliza o bloco inteiro horizontalmente e mantém a margem inferior */
    margin: 0 auto 15px auto; 
    
    /* 3. Força o texto para a esquerda dentro do bloco */
    text-align: left; 

    /* 4. Flexbox para jogar o texto para a esquerda e a seta para a direita */
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding-bottom: 15px;
    cursor: pointer;
    user-select: none;
  }

  & .h3Center-diarioDev:hover {
    /* color: blue; */
    background-color: #3333;
  }

  & .h3Center-diarioDev.active {
    color: blue;
    text-decoration: none;
  }
`;

export const CollapsibleContent = styled.div`
  overflow: hidden;
  max-height: 0;
  opacity: 0;
  transition: max-height 0.5s ease, opacity 0.5s ease;

  ${({ isOpen }) =>
    isOpen &&
    css`
      max-height: none;
      opacity: 1;
    `}
`;