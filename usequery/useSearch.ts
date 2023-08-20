import { ISearchInfo } from '@/pages/api/api';
import { loadsearchTitle } from '@/pages/api/search';
import { useInfiniteQuery } from '@tanstack/react-query';

export function useSearch(searchTitle: string, region: string) {
  return useInfiniteQuery<ISearchInfo>(
    ['search', searchTitle, region],
    ({ pageParam = 1 }) =>
      loadsearchTitle({
        search: searchTitle as string,
        region: region as string,
        page: pageParam,
      }),
    {
      getNextPageParam: (lastPage) => {
        if (!lastPage) {
          return null;
        }

        const currentPage = lastPage.currentPage;
        const totalPages = lastPage.totalPage;

        const nextPage = currentPage + 1;

        if (nextPage > totalPages) {
          return null;
        }

        return nextPage;
      },
    },
  );
}
