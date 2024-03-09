import styled from 'styled-components';
import { Title } from '.';

export const StyledTitle = styled(Title)`
  margin-bottom: 32px;

  ${props => {
    switch (props.size) {
      case 'h1':
        return `
          font-size: 40px;
          font-weight: 600;
          line-height: 48px;
          letter-spacing: -0.02em;
          text-align: left;
        `;
      case 'h2':
        return `
          font-size: 32px;
          font-weight: 600;
          line-height: 40px;
          letter-spacing: -0.02em;
          text-align: left;
        `;
      default:
        return `
          font-size: 40px;
        `;
    }
  }}
`;