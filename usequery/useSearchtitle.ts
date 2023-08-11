import { ISearchData } from '@/pages/api/api';
import { searchTitle } from '@/pages/api/search';
import { useQuery } from '@tanstack/react-query';

export const useSearchTitle = (data: ISearchData) => {
  return useQuery({
    queryKey: ['searchTitle', data.search, data.region],
    queryFn: () => searchTitle({ search: data.search, region: data.region }),
  });
};
