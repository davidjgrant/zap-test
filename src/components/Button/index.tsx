import React from 'react';
import { StyledButton } from './StyledButton';

export const Button = ({ children }: { children: React.ReactNode }) => {
  return <StyledButton type="submit">{children}</StyledButton>;
};
