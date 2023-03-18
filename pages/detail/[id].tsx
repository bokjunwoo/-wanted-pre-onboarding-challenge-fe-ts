import DetailContentCard from '@/components/detail/DetailContentCard';
import DetailImageCard, { Cursor } from '@/components/detail/DetailImageCard';
import { Col, Row } from 'react-bootstrap';
import { useRouter } from 'next/router';
import React, { useCallback, useState } from 'react';
import { Title } from '@/components/submain/SubText';
import DetailInformation from '@/components/detail/DetailInformation';
import Review from '@/components/detail/review/Review';
import ReviewWrite from '@/components/detail/review/ReviewWrite';

export default function DetailId() {
  const router = useRouter();
  const { id } = router.query;

  const [moreInformation, setMoreInformation] = useState<boolean>(false);

  const onClickMoreInformation = useCallback(() => {
    setMoreInformation((prev) => !prev);
  }, []);

  return (
    <>
      <Row xs={1} md={1} lg={2} className='mt-5'>
        <Col>
          <DetailImageCard />
        </Col>
        <Col>
          <DetailContentCard />
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
          <DetailInformation onClickMoreInformation={onClickMoreInformation} />
        ) : null}
      </div>

      <div className="mt-5 mb-4">
        <Title>
          <span>리뷰 0</span>
        </Title>

        <ReviewWrite minRows={3}/>

        <Review />
      </div>
    </>
  );
}
