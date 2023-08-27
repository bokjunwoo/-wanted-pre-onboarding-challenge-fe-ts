import { regionNames } from '@/data/region';
import { useSearch } from '@/usequery/useSearch';
import { useSearchParams } from 'next/navigation';
import React, { useEffect } from 'react';
import { Row } from 'react-bootstrap';
import { useInView } from 'react-intersection-observer';
import ListCard from '../list/ListCard';
import ListCardPlaceholder from '../list/ListCardPlaceholder';

export default function SearchPosts() {
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
      {region && searchTitle && (
        <h1 className="fs-2 mt-3">
          {`${regionNames[region]} | ${searchTitle}`}의 검색결과
        </h1>
      )}

      {loadSearchLoading && (
        <Row xs={1} sm={2} md={2} lg={3} className="mt-2">
          {Array.from({ length: 3 }).map((_, i) => (
            <ListCardPlaceholder key={i} />
          ))}
        </Row>
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
    </>
  );
}
