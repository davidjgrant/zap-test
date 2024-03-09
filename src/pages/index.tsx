import Head from 'next/head';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { Table } from '@/components/Table';
import { Pagination } from '@/components/Pagination';
import { SearchBar } from '@/components/SearchBar';
import { Payout, PayoutData, query as QueryType } from '@/types';
import { Title } from '@/components/Title';
import { StyledPage } from '@/components/Layouts/StyledPageLayout';
import { StyledHeader } from '@/components/Layouts/StyledHeader';

export default function Home() {
  const [query, setQuery] = useState<QueryType>({ page: 1, limit: 10 });
  const [searchQuery, setSearchQuery] = useState('');
  const [payoutResults, setPayoutResults] = useState<PayoutData[]>([]);

  const { data, isLoading, isError, isFetched, refetch } = useQuery<Payout>({
    queryKey: ['payouts', query, searchQuery],
    queryFn: async () => {
      const fetchUrl = searchQuery
        ? `https://theseus-staging.lithium.ventures/api/v1/analytics/tech-test/search?query=${searchQuery}`
        : `https://theseus-staging.lithium.ventures/api/v1/analytics/tech-test/payouts?page=${query.page}&limit=${query.limit}`;

      const response = await fetch(fetchUrl);
      return response.json();
    },
  });

  useEffect(() => {
    if (data && data.data) {
      setPayoutResults(data.data);
    }
  }, [data, searchQuery]);

  return (
    <StyledPage>
      <Title text="Payouts" size="h1" />
      <StyledHeader>
        <Title text="Payout History" size="h2" styled={true} />
        <SearchBar setSearchQuery={setSearchQuery} />
      </StyledHeader>
      <Table results={payoutResults} isLoading={isLoading} isError={isError} />
      {data && <Pagination query={query} setQuery={setQuery} />}
    </StyledPage>
  );
}
