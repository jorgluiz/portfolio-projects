import { useState } from 'react';
import styled, { css } from 'styled-components';

const DividerWithText = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  color: #94a3b8; /* Cor do texto */
  font-size: 14px;
  font-weight: 500;
  width: 90%; /* Controla a largura total */
  margin: 25px 0; /* Espaçamento vertical */
  cursor: pointer;

  /* A linha antes do texto */
  &::before,
  &::after {
    content: '';
    flex: 1;
    border-bottom: 1px solid #374151; /* Cor da linha */
  }

  /* Espaçamento entre a linha e o texto */
  &::before {
    margin-right: 0.5em;
  }
  &::after {
    margin-left: 0.5em;
  }
`;

const CollapsibleContent = styled.div`
  overflow: hidden;
  max-height: 0;
  opacity: 0;
  transition: max-height 0.5s ease, opacity 0.5s ease;

  ${({ isOpen }) =>
    isOpen &&
    css`
      max-height: 1000px; /* valor muito alto para conter todo conteúdo */
      opacity: 1;
      /* position: relative;

    animation-name: tutorial;
    animation-duration: 5s;
    animation-iteration-count: 1;

    @keyframes tutorial {
        from {left: 200px;}
        to {left: 0;}
    } */
    `}
`;

const CollapsibleSection = ({ title, children, isOpen, onToggle }) => {

  return (
    <>
      {/* MODIFICADO: onClick agora chama a função recebida por props */}
      <DividerWithText onClick={onToggle}>
        {title}
      </DividerWithText>
      <CollapsibleContent isOpen={isOpen}>
        {children}
      </CollapsibleContent>
    </>
  );
};

export default CollapsibleSection;