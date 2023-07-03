import { ISearchDataInfo } from '@/pages/api/api';
import { searchTitle } from '@/pages/api/plan';
import { useQuery, QueryObserverResult } from '@tanstack/react-query';
import { AxiosError } from 'axios';

export const useSearchData = (
  region: string,
  search: string,
): QueryObserverResult<ISearchDataInfo, AxiosError> => {
  return useQuery<ISearchDataInfo, AxiosError>({
    queryKey: ['searchTitle', region, search],
    queryFn: () => searchTitle({ region, search }),
    enabled: false, // 초기에 요청 비활성화
  });
};
