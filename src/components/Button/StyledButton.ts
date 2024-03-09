import styled from 'styled-components';

export const StyledButton = styled.button`
  background-color: #000;
  color: #fff;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  &:hover {
    background-color: #333;
  }
  &:disabled {
    background-color: #ccc;
    color: #666;
    cursor: auto;
  }
`;