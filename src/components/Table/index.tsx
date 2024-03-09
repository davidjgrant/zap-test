import { PayoutData } from '@/types';
import {
  StyledTable,
  StyledTableValue,
  StyledTableValueWrapper,
} from './StyledTable';
import { currencyFormater } from '@/utils/currencyFormater';
import { dateConvertor } from '@/utils/dateConvertor';

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

  const dateOptions = {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
  };

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
          // A nice little date formater utility function - just encase we want to swap out the date format
          const date = dateConvertor(payout.dateAndTime, dateOptions);

          // A nice little currency formater utility function - just encase we want to swap out the currency
          const priceValue = Number(payout.value.split('$')[1]);
          const price = currencyFormater('USD', priceValue);

          return (
            <tr key={index}>
              <td>{date}</td>
              <td>
                <StyledTableValueWrapper status={payout.status}>
                  {payout.status}
                </StyledTableValueWrapper>
              </td>
              <StyledTableValue>{price}</StyledTableValue>
            </tr>
          );
        })}
      </tbody>
    </StyledTable>
  );
};
