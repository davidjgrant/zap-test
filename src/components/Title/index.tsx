import React from 'react';
import { StyledTitle } from './StyledTitle';

export const Title = ({
  text,
  size,
  styled,
}: {
  text: string;
  size: keyof JSX.IntrinsicElements;
  styled?: boolean;
}) => {
  return (
    <StyledTitle as={size} size={size} styled={styled ? styled : false}>
      {text}
    </StyledTitle>
  );
};
