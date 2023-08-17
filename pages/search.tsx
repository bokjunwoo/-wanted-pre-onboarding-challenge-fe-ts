import SearchForm from '@/components/search/SearchForm';
import SearchRegionButton from '@/components/search/SearchRegionButton';
import { regionNames } from '@/data/region';
import { useInfiniteQuery } from '@tanstack/react-query';
import Head from 'next/head';
import { useSearchParams } from 'next/navigation';
import { loadsearchTitle } from './api/search';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

export default function Search() {
  const searchParams = useSearchParams();

  const searchTitle = searchParams.get('title');
  const region = searchParams.get('region');

  const [ref, inView] = useInView();

  const {
    data,
    isLoading: loadSearchLoading,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery(
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

  const allPosts = data?.pages.flatMap((page) => page.data);
  const isEmpty = data?.pages[0]?.length === 0;
  const isReachingEnd = isEmpty || (data && !hasNextPage);
  const hasMorePosts = !isEmpty && !isReachingEnd;
  const readToLoad = hasMorePosts && !loadSearchLoading;

  useEffect(() => {
    if (inView && readToLoad) {
      fetchNextPage();
    }
  }, [inView, readToLoad, fetchNextPage]);

  return (
    <>
      <Head>
        <title>
          {region && searchTitle
            ? `${regionNames[region]} - ${searchTitle}`
            : '트립로그 - 검색하기'}
        </title>
      </Head>

      <div className="mt-5">
        <h1 className="fs-2 mt-5">
          지역 {region ? `| ${regionNames[region]}` : '| 전체'}
        </h1>
      </div>

      <SearchRegionButton />

      <SearchForm />

      {allPosts?.map((v) => {
        return <div key={v._id}>{v.title}</div>;
      })}

      <div
        ref={readToLoad ? ref : undefined}
        style={{ height: 50, backgroundColor: 'yellow' }}
      />
    </>
  );
}
