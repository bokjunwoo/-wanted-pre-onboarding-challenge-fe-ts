import SubCard from '@/components/submain/SubCard';
import CommonNav from '@/components/submain/CommonNav';
import SubText from '@/components/submain/SubText';
import SubTitleImage from '@/components/submain/SubTitleImage';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import Head from 'next/head';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { pickData } from '@/data/region';

type RegionNames = {
  [key: string]: string;
};

const regionNames: RegionNames = {
  seoul: '서울',
  busan: '부산',
  gangneung: '강릉',
  gyeongju: '경주',
  jeonju: '전주',
  jeju: '제주',
};

export default function Region() {
  const router = useRouter();
  const { region } = router.query as { region: string };

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

      <CommonNav region={region} />

      <div>
        <SubText
          mainText="트랜디한 트립로그의 Pick!"
          icon="✨"
          subText="브이로그 감성 낭낭한 여행일지, 트립로그와 함께!"
        />

        <Container>
          <ScrollMenu>
            {pickData.map((data) => {
              return (
                <SubCard
                  data={data}
                  key={data.id}
                  dataLength={pickData.length}
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

        <Container>
          <ScrollMenu>
            {pickData.map((data) => {
              return (
                <SubCard
                  data={data}
                  key={data.id}
                  dataLength={pickData.length}
                />
              );
            })}
          </ScrollMenu>
        </Container>
      </div>

      <div>
        <SubText
          mainText={`${regionNames[region]}에 간다면?`}
          icon="✈️"
          subText="겨울에 가면 더 좋은 서울 여행지 추천"
        />

        <Container>
          <ScrollMenu>
            {pickData.map((data) => {
              return (
                <SubCard
                  data={data}
                  key={data.id}
                  dataLength={pickData.length}
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
