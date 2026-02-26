import styled, { css } from "styled-components";

export const ResumoTechMainContainer = styled.div`

width: 100%;
padding: 20px 10px;

& .h3Center-resumoTech {
text-align: center;
margin-bottom: 15px;
padding-bottom: 15px;
cursor: pointer;
user-select: none;
}

& .h3Center-resumoTech:hover {
  color: blue; /* azul mais escuro ao passar mouse */
}

& .h3Center-resumoTech.active {
  color: blue;
  text-decoration: none; /* pode tirar o underline se quiser */
}

& .EJS, .GitHub, .MySQL {
border-bottom: 1px solid #ccc;
/* box-shadow: 0 1px 0 0 #eee; */
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
      max-height: 100%; /* valor muito alto para conter todo conteúdo */
      opacity: 1;
    `}
`;