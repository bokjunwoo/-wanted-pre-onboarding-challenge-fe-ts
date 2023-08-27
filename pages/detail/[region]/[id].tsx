import DetailContentCard from '@/components/detail/DetailContentCard';
import DetailImageCard from '@/components/detail/DetailImageCard';
import { Col, ListGroup, Row } from 'react-bootstrap';
import { useCallback, useRef, useState } from 'react';
import DetailInformation from '@/components/detail/DetailInformation';
import ReviewWrite from '@/components/detail/review/ReviewWrite';
import ReviewContent from '@/components/detail/review/ReviewContent';
import {
  getExtractUrl,
  getAverageStar,
  getLikeClickUser,
} from '@/utils/detailHelper';
import { Cursor, Title } from '@/styles/styled';
import Head from 'next/head';
import LoadingSpinner from '@/components/common/LoadingSpinner';
import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query';
import {
  fetchDetail,
  fetchKoreaAPI,
  fetchReview,
  fetchDetailLike,
} from '@/pages/api/detail';
import { useRouter } from 'next/router';
import { GetStaticPropsContext } from 'next';
import { userInfo } from '@/pages/api/sign';
import {
  useFetchDetail,
  useFetchReview,
  useFetchDetailLike,
  useFetchKoreaAPI,
} from '@/usequery/useDetail';

export default function DetailId() {
  const router = useRouter();
  const { region, id } = router.query as { region: string; id: string };

  const { data: user } = useQuery(['user'], userInfo);

  const { data: detail, isLoading: detailLoading } = useFetchDetail(region, id);
  const { data: review, isLoading: reviewLoading } = useFetchReview(id);
  const { data: detailLike, isLoading: reviewLikeLoading } =
    useFetchDetailLike(id);
  const { data: koreaAPI, isLoading: koreaAPILoading } = useFetchKoreaAPI(id);

  const [moreInformation, setMoreInformation] = useState(false);

  const onClickMoreInformation = useCallback(() => {
    setMoreInformation((prev) => !prev);
  }, []);

  const titleRef = useRef<HTMLDivElement>(null);

  const handleButtonClick = () => {
    if (titleRef.current) {
      titleRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const averageStar = getAverageStar(review);
  const homepageUrl = getExtractUrl(koreaAPI?.homepage);
  const likeClickUser = getLikeClickUser(detailLike?.likeuser, user);

  if (detailLoading || reviewLoading || reviewLikeLoading || koreaAPILoading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      {detail && (
        <>
          <Head>
            <title>{`${detail.title} - 트립로그`}</title>
          </Head>

          <Row xs={1} md={1} lg={2} className="mt-5">
            <Col>
              <DetailImageCard
                detail={detail}
                like={detailLike?.like || 0}
                star={averageStar}
                review={review?.length || 0}
                likeClickUser={likeClickUser}
                onButtonClick={handleButtonClick}
              />
            </Col>
            <Col>
              <DetailContentCard detail={detail} homepageUrl={homepageUrl} />
            </Col>
          </Row>

          <div className="mt-5">
            <Title>
              <span>상세정보</span>
              <Cursor onClick={onClickMoreInformation}>
                {moreInformation ? '▼' : '►'}
              </Cursor>
            </Title>

            {moreInformation ? (
              <DetailInformation
                onClickMoreInformation={onClickMoreInformation}
                overview={koreaAPI?.overview}
              />
            ) : null}
          </div>

          <div className="mt-3">
            <ReviewWrite minRows={3} />

            <Title ref={titleRef}>
              <span>리뷰 {review?.length}개</span>
            </Title>

            <ListGroup variant="flush" className="mt-4">
              {review?.length === 0
                ? '작성된 리뷰가 없습니다.'
                : review?.map((v) => {
                    return <ReviewContent key={v._id} review={v} />;
                  })}
              <ListGroup.Item></ListGroup.Item>
            </ListGroup>
          </div>
        </>
      )}
    </>
  );
}

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const queryClient = new QueryClient();

  const { region, id } = context.params as { region: string; id: string };

  await queryClient.prefetchQuery(['fetchDetail', region, id], () =>
    fetchDetail(region, id),
  );
  await queryClient.prefetchQuery(['fetchReview', id], () => fetchReview(id));
  await queryClient.prefetchQuery(['fetchDetailLike', id], () =>
    fetchDetailLike(id),
  );
  await queryClient.prefetchQuery(['fetchKoreaAPI', id], () =>
    fetchKoreaAPI(id),
  );

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
};
