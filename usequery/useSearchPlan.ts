import { ISearchDataInfo } from '@/pages/api/api';
import { planSearch } from '@/pages/api/plan';
import { useQuery, QueryObserverResult } from '@tanstack/react-query';
import { AxiosError } from 'axios';

export const useSearchPlan = (
  region: string,
  search: string,
): QueryObserverResult<ISearchDataInfo[], AxiosError> => {
  return useQuery<ISearchDataInfo[], AxiosError>({
    queryKey: ['planSearch', region, search],
    queryFn: () => planSearch({ region, search }),
    enabled: false, // 초기에 요청 비활성화
  });
};
