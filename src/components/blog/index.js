import styled, { css } from "styled-components";

export const DiarioDevMainContainer = styled.div`

width: 100%;
padding: 20px 10px;

& .h3Center-diarioDev {
text-align: center;
margin-bottom: 15px;
padding-bottom: 15px;
cursor: pointer;
user-select: none;
}

& .h3Center-diarioDev:hover {
  color: blue; /* azul mais escuro ao passar mouse */
}

& .h3Center-diarioDev.active {
  color: blue;
  text-decoration: none; /* pode tirar o underline se quiser */
}

/* & .EJS, .GitConnection, .MySQL {
border-bottom: 1px solid #ccc;
} */
`;

export const CollapsibleContent = styled.div`
  overflow: hidden;
  max-height: 0;
  opacity: 0;
  transition: max-height 0.5s ease, opacity 0.5s ease;

  ${({ isOpen }) =>
    isOpen &&
    css`
        max-height: none; /* permite altura natural do conteúdo */
      opacity: 1;
    `}
`;