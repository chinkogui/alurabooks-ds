import React from "react";
import styled, { css } from "styled-components";

export interface AbBotaoProps {
  texto?: string,
  tipo?: 'primary' | 'secondary',
  onClick?: () => void
}

const BotaoEstilizado = styled.button<AbBotaoProps>`
  background: ${(props: AbBotaoProps) => props.tipo === 'primary' ? '#EB9B00' : '#FFF'};
  padding: 16px 32px;
  border: 2px solid #EB9B00;
  color: ${(props: AbBotaoProps) => props.tipo === 'primary' ? '#FFF' : '#EB9B00'};
  font-size: 20px;
  cursor: pointer;
  ${(props: AbBotaoProps) => props.tipo === 'primary'
    ? css`
      &:hover {
        background: #B87900;
        border: 2px solid #B87900;
      }
    `
    : css`
      &:hover {
        background: #FFF;
        border: 2px solid #B87900;
        color: #B87900
      }
    `
  };
`

export const AbBotao = ({ texto, onClick, tipo = 'primary' }: AbBotaoProps) => {
  return (
    <BotaoEstilizado
      onClick={onClick}
      tipo={tipo}
    >
      {texto}
    </BotaoEstilizado>
  )
}
