import SearchForm from '@/components/search/SearchForm';
import SearchRegionButton from '@/components/search/SearchRegionButton';
import { regionNames } from '@/data/region';
import Head from 'next/head';
import { useSearchParams } from 'next/navigation';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { Row } from 'react-bootstrap';
import ListCard from '@/components/list/ListCard';
import { useSearch } from '@/usequery/useSearch';
import SearchBestList from '@/components/search/SearchBestList';

export default function Search() {
  const searchParams = useSearchParams();

  const searchTitle = searchParams.get('title') as string;
  const region = searchParams.get('region') as string;

  const [ref, inView] = useInView();

  const {
    data,
    isLoading: loadSearchLoading,
    fetchNextPage,
    hasNextPage,
  } = useSearch(searchTitle, region);

  const allPosts = data?.pages.flatMap((page) => page.data);
  const isEmpty = data?.pages.length === 0;
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

      {region && searchTitle && (
        <h1 className="fs-2 mt-3">
          {`${regionNames[region]} | ${searchTitle}`}의 검색결과
        </h1>
      )}

      {allPosts?.length !== 0 && (
        <Row xs={1} sm={2} md={2} lg={3} className="mt-2">
          {allPosts?.map((v) => (
            <ListCard key={v._id} data={v} region={region} />
          ))}
        </Row>
      )}

      {allPosts?.length === 0 && searchTitle && region && (
        <span>검색결과가 없습니다.</span>
      )}

      <div ref={readToLoad ? ref : undefined}></div>

      <SearchBestList />
    </>
  );
}
