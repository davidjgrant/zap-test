import { PayoutData } from '@/types';

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
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  if (!results) {
    return <div>No results</div>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Date and Time</th>
          <th>Status</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        {results.map((payout, index) => (
          <tr key={index}>
            <td>{payout.dateAndTime}</td>
            <td>{payout.status}</td>
            <td>{payout.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
