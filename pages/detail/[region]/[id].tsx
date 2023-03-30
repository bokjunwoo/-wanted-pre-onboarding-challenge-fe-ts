import DetailContentCard from '@/components/detail/DetailContentCard';
import DetailImageCard from '@/components/detail/DetailImageCard';
import { Col, ListGroup, Row } from 'react-bootstrap';
import { useCallback, useState } from 'react';
import { Title } from '@/components/submain/SubText';
import DetailInformation from '@/components/detail/DetailInformation';
import ReviewWrite from '@/components/detail/review/ReviewWrite';
import {
  useFetchDetail,
  useFetchKoreaAPI,
  useFetchReview,
  useFetchRevieLike,
} from '@/pages/api/useQuery';
import ReviewContent from '@/components/detail/review/ReviewContent';
import {
  getExtractUrl,
  getAverageStar,
  getLikeClickUser,
} from '@/utils/detailHelper';
import { Cursor } from '@/styles/styled';
import Head from 'next/head';
import { DetailParamsType, IDetailParams } from './detail';
import LoadingSpinner from '@/components/common/LoadingSpinner';
import { dehydrate, QueryClient } from '@tanstack/react-query';
import {
  fetchDetail,
  fetchKoreaAPI,
  fetchReview,
  fetchReviewLike,
} from '@/pages/api/detail';
import { useRouter } from 'next/router';

export default function DetailId() {
  const router = useRouter();
  const { region, id } = router.query as { region: string; id: string };
  const nickName = 'thals0';

  const { isLoading: detailLoading, data: detail } = useFetchDetail(region, id);
  const { isLoading: reviewLoading, data: review } = useFetchReview(id);
  const { isLoading: reviewLikeLoading, data: reviewLike } =
    useFetchRevieLike(id);
  const { isLoading: koreaAPILoading, data: koreaAPI } = useFetchKoreaAPI(id);

  const [moreInformation, setMoreInformation] = useState(false);

  const onClickMoreInformation = useCallback(() => {
    setMoreInformation((prev) => !prev);
  }, []);

  const averageStar = getAverageStar(review);
  const homepageUrl = getExtractUrl(koreaAPI?.homepage);
  const likeClickUser = getLikeClickUser(reviewLike, nickName);

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
                image={detail.firstimage1}
                like={detail.like}
                star={averageStar}
                likeClickUser={likeClickUser}
              />
            </Col>
            <Col>
              <DetailContentCard detail={detail} homepageUrl={homepageUrl} />
            </Col>
          </Row>

          <div className="mt-5 mb-4">
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

          <div className="mt-5 mb-4">
            <Title>
              <span>리뷰 {review?.length}개</span>
            </Title>

            <ReviewWrite minRows={3} />

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

export const getServerSideProps = async ({ params }: DetailParamsType) => {
  const { region, id } = params;

  const queryClient = new QueryClient();

  await Promise.all([
    queryClient.prefetchQuery(['fetchDetail'], () => fetchDetail(region, id)),
    queryClient.prefetchQuery(['fetchReview'], () => fetchReview(id)),
    queryClient.prefetchQuery(['fetchReviewLike'], () => fetchReviewLike(id)),
    queryClient.prefetchQuery(['fetchKoreaAPI'], () => fetchKoreaAPI(id)),
  ]);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
