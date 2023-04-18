import DetailContentCard from '@/components/detail/DetailContentCard';
import DetailImageCard from '@/components/detail/DetailImageCard';
import { Col, ListGroup, Row } from 'react-bootstrap';
import { useCallback, useState } from 'react';
import { Title } from '@/components/submain/SubText';
import DetailInformation from '@/components/detail/DetailInformation';
import ReviewWrite from '@/components/detail/review/ReviewWrite';
import ReviewContent from '@/components/detail/review/ReviewContent';
import {
  getExtractUrl,
  getAverageStar,
  getLikeClickUser,
} from '@/utils/detailHelper';
import { Cursor } from '@/styles/styled';
import Head from 'next/head';
import LoadingSpinner from '@/components/common/LoadingSpinner';
import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query';
import {
  fetchDetail,
  fetchKoreaAPI,
  fetchReview,
  fetchReviewLike,
} from '@/pages/api/detail';
import { useRouter } from 'next/router';
import { GetStaticPropsContext } from 'next';

export default function DetailId() {
  const router = useRouter();
  const { region, id } = router.query as { region: string; id: string };
  const nickName = 'thals0';

  const { data: detail, isLoading: detailLoading } = useQuery({
    queryKey: ['fetchDetail', region, id],
    queryFn: () => fetchDetail(region, id),
  });
  const { data: review, isLoading: reviewLoading } = useQuery({
    queryKey: ['fetchReview', id],
    queryFn: () => fetchReview(id),
  });
  const { data: reviewLike, isLoading: reviewLikeLoading } = useQuery({
    queryKey: ['fetchReviewLike', id],
    queryFn: () => fetchReviewLike(id),
  });
  const { data: koreaAPI, isLoading: koreaAPILoading } = useQuery({
    queryKey: ['fetchKoreaAPI', id],
    queryFn: () => fetchKoreaAPI(id),
  });

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
  await queryClient.prefetchQuery(['fetchReviewLike', id], () =>
    fetchReviewLike(id),
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
