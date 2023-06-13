import React from 'react';
import styled from 'styled-components';

export interface AbTagProps {
  texto?: string
}

const TagEstilizado = styled.div`
  padding: 24px 32px;
  color: #FFF;
  background: #EB9B00;
  font-size: 24px;
  display: inline-block;
  font-family: sans-serif;
`

export const AbTag = ({ texto }: AbTagProps) => {
  return (
    <TagEstilizado>
      {texto}
    </TagEstilizado>
  )
}
