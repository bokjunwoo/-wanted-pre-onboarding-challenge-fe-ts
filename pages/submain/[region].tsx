import SubCard from '@/components/submain/SubCard';
import ListNav from '@/components/list/ListNav';
import SubText from '@/components/submain/SubText';
import SubTitleImage from '@/components/submain/SubTitleImage';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import Head from 'next/head';
import styled from 'styled-components';
import { Col, Row } from 'react-bootstrap';
import SubPreparation from '@/components/submain/SubPreparation';
import { regionContents } from '@/data/contents';
import { regionNames } from '@/data/region';
import { ISubmainParams, SubmainParamsType } from './submain';

export default function Region({ region, stay, tour }: ISubmainParams) {
  return (
    <>
      <Head>
        <title>{`${regionNames[region]} - 여행지`}</title>
      </Head>

      <SubTitleImage
        region={region as string}
        regionName={regionNames[region]}
      />

      <SubText
        mainText={`${regionNames[region]}의 여행지`}
        icon="📅"
        subText="다양한 사람들인 남긴 리뷰를 보고 결정해요!"
      />

      <ListNav region={region} />

      <div>
        <SubText
          mainText="트랜디한 트립로그의 Pick!"
          icon="✨"
          subText="브이로그 감성 낭낭한 여행일지, 트립로그와 함께!"
        />

        <Container>
          <ScrollMenu>
            {stay.map((data) => {
              return (
                <SubCard
                  region={region}
                  data={data}
                  key={data.contentid}
                  dataLength={stay.length}
                />
              );
            })}
          </ScrollMenu>
        </Container>
      </div>

      <div>
        <SubText
          mainText="여행 전 필수 준비항목"
          icon="🧳"
          subText="트립로그가 챙겨주는 이번 여행!"
        />

        <div className="d-flex justify-content-center">
          <Row>
            <Col>
              <SubPreparation content="plan" region={region} />
            </Col>

            <Col>
              <SubPreparation content="ledger" />
            </Col>

            <Col>
              <SubPreparation content="checklist" />
            </Col>
          </Row>
        </div>
      </div>

      <div>
        <SubText
          mainText={`${regionNames[region]}에 간다면?`}
          icon="✈️"
          subText="겨울에 가면 더 좋은 서울 여행지 추천"
        />

        <Container>
          <ScrollMenu>
            {tour.map((data) => {
              return (
                <SubCard
                  region={region}
                  data={data}
                  key={data.contentid}
                  dataLength={tour.length}
                />
              );
            })}
          </ScrollMenu>
        </Container>
      </div>
    </>
  );
}

const Container = styled.div`
  overflow: hidden;
  .react-horizontal-scrolling-menu--scroll-container::-webkit-scrollbar {
    display: none;
  }
  .react-horizontal-scrolling-menu--scroll-container {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
`;

export const getStaticPaths = async () => {
  const paths = Object.keys(regionNames).map((region) => ({
    params: {
      region,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }: SubmainParamsType) => {
  const { region } = params;
  const stay = regionContents[region as keyof typeof regionContents].stay;
  const tour = regionContents[region as keyof typeof regionContents].tour;

  return {
    props: {
      region,
      stay,
      tour,
    },
  };
};
