import { loadsearchTitle } from '@/pages/api/search';
import { useInfiniteQuery } from '@tanstack/react-query';

export function useSearch(searchTitle: string, region: string) {
  return useInfiniteQuery(
    ['search', searchTitle],
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

        const currentPage = parseInt(lastPage.currentPage);
        const totalPages = parseInt(lastPage.totalPage);

        const nextPage = currentPage + 1;

        if (nextPage > totalPages) {
          return null;
        }

        return nextPage;
      },
    },
  );
}
