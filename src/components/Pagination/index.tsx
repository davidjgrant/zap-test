import { query } from '@/types';
import { StyledPagination } from './StyledPagination';
import { StyledButton } from '../Button/StyledButton';

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
    <StyledPagination>
      <StyledButton disabled={query.page <= 1} onClick={prevPage}>
        Previous
      </StyledButton>
      <StyledButton onClick={nextPage}>Next</StyledButton>
    </StyledPagination>
  );
};
