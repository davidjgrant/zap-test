'use client';

import { useState } from 'react';
import {
  StyledSearchButton,
  StyledSearchForm,
  StyledSearchInput,
} from './StyledSearchBar';

export const SearchBar = ({
  setSearchQuery,
}: {
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchQuery(searchTerm);
  };

  return (
    <StyledSearchForm onSubmit={handleSubmit}>
      <StyledSearchInput
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Search payouts..."
      />
      <StyledSearchButton>Search</StyledSearchButton>
    </StyledSearchForm>
  );
};
