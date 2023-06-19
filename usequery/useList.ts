import { fetchList } from '@/pages/api/list';
import { useQuery } from '@tanstack/react-query';

export const useList = (region: string, type: string, page: number) => {
  return useQuery({
    queryKey: ['fetchList', region, type, page],
    queryFn: () => fetchList(region, type, page),
  });
};
