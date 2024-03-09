import styled from 'styled-components';

export const StyledPagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 24px;
  margin-bottom: 24px;
  gap: 16px;
  font-size: 14px;
  line-height: 24px;
  color: ${props => props.theme.colors.text};
`;
