import styled, { css } from "styled-components";

export const BuildProjectMainContainer = styled.div`

padding-top: 20px;
user-select: none;
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