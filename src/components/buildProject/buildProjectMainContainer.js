import styled, { css } from "styled-components";

export const BuildProjectMainContainer = styled.div`

/* user-select: none; */
padding: 20px 10px;

& .h3Center-buildProject {
  margin-bottom: 15px;
  padding-bottom: 15px;
}

& .h3Center-buildProject:hover {
  color: blue; /* azul mais escuro ao passar mouse */
}

& .h3Center-buildProject.active {
  color: blue;
  text-decoration: none; /* pode tirar o underline se quiser */
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
      max-height: 9999px; /* valor muito alto para conter todo conteúdo */
      opacity: 1;
    `}
`;