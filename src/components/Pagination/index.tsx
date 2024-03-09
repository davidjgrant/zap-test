import { query } from '@/types';

export const Pagination = ({
  query,
  setQuery,
}: {
  query: query;
  setQuery: React.Dispatch<React.SetStateAction<query>>;
}) => {
  const prevPage = () => {
    setQuery({ ...query, page: query.page - 1 });
  };

  const nextPage = () => {
    setQuery({ ...query, page: query.page + 1 });
  };

  return (
    <div>
      <button disabled={query.page <= 1} onClick={prevPage}>
        Previous
      </button>
      <button onClick={nextPage}>Next</button>
    </div>
  );
};
