import styled from "styled-components";

export const StyledTable = styled.table<{ loading: boolean }>`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 24px;

  th {
    font-size: 12px;
    font-weight: 500;
    line-height: 12px;
    letter-spacing: -0.01em;
  }

  tr {
    width: 100%;
    height: 48px;
  }

  td {
    font-size: 14px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: -0.01em;
  }

  th, td {
    text-align: left;
    padding: 16px 24px;
    color: #6F767E;
  }

  tr:nth-child(even) {
    background-color:#F4F4F480;

    ${({ loading }) => loading && `
      // animate the background shimmer
      @keyframes loading {
        0% {
          background-position: 100% 0;
        }
        100% {
          background-position: -100% 0;
        }
      }

      animation-duration: 1.5s;
      animation-fill-mode: forwards;
      animation-iteration-count: infinite;
      animation-name: loading;
      animation-timing-function: linear;
      background: #F4F4F480;
      background: linear-gradient(to left, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);
      background-size: 1000px 100vw;
      height: 100%;
      position: relative;
      overflow: hidden;
    `}
  }
`;

export const StyledTableValueWrapper = styled.span<{ status?: string }>`
  padding: 4px 8px;
  border-radius: 6px;
  color: #1A1D1F;
  line-height: 24px;
  font-size: 14px;
  text-align: center;
  background-color: ${props => props.status?.toLowerCase() === 'completed' ? '#60CA57' : '#6F767E66'};
`;

export const StyledTableValue = styled.td`
  color: #1A1D1F !important;
  width: 15%;
`;