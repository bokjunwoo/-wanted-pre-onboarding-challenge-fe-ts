import { searchTitle } from '@/pages/api/plan';
import { useQuery } from '@tanstack/react-query';

export const useSearchData = (
  region: string,
  search: string,
): {
  searchData: any;
  searchDataLoading: boolean;
} => {
  const { data: searchData, isLoading: searchDataLoading } = useQuery(
    ['searchTitle'],
    () => searchTitle({ region, search }),
    {
      enabled: false, // 초기에 요청 비활성화
    },
  );

  return { searchData, searchDataLoading };
};
