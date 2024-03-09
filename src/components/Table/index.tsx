import { PayoutData } from '@/types';
import {
  StyledTable,
  StyledTableValue,
  StyledTableValueWrapper,
} from './StyledTable';

export const Table = ({
  results,
  isLoading,
  isError,
}: {
  results?: PayoutData[];
  isLoading: boolean;
  isError?: boolean;
}) => {
  if (isLoading) {
    return (
      <StyledTable loading={isLoading}>
        <thead>
          <tr>
            <th>Date and Time</th>
            <th>Status</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </StyledTable>
    );
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  if (!results) {
    return <div>No results</div>;
  }

  return (
    <StyledTable loading={isLoading}>
      <thead>
        <tr>
          <th>Date and Time</th>
          <th>Status</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        {results.map((payout, index) => {
          // set the date to this format: Fri, Apr 9, 18:03
          const date = new Date(payout.dateAndTime).toLocaleString('en-US', {
            weekday: 'short',
            month: 'short',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
          });

          return (
            <tr key={index}>
              <td>{date}</td>
              <td>
                <StyledTableValueWrapper status={payout.status}>
                  {payout.status}
                </StyledTableValueWrapper>
              </td>
              <StyledTableValue>{payout.value}</StyledTableValue>
            </tr>
          );
        })}
      </tbody>
    </StyledTable>
  );
};
