import { useSearchParams } from 'next/navigation';
import ListCard from '../list/ListCard';
import { IDetailInfo } from '@/pages/api/api';
import { Row } from 'react-bootstrap';
import { regionNames } from '@/data/region';
import { loadSearchBest } from '@/pages/api/search';
import { useQuery } from '@tanstack/react-query';

export default function SearchBestList() {
  const searchParams = useSearchParams();

  const region = searchParams.get('region') as string;

  const { data, isLoading } = useQuery<IDetailInfo[]>(
    ['bestSearchtData', region],
    () => loadSearchBest(region),
  );

  if (isLoading) {
    return <p>로딩중...</p>;
  }

  return (
    <>
      {region ? (
        <>
          <h1 className="fs-2 mt-3">
            ✨ {regionNames[region]}의 트랜디한 트립로그의 Pick!
          </h1>

          <Row xs={1} sm={2} md={2} lg={3} className="mt-2">
            {data?.map((v) => {
              return <ListCard key={v._id} data={v} region={region} />;
            })}
          </Row>
        </>
      ) : (
        <>
          <h1 className="fs-2 mt-3">✨ 트랜디한 트립로그의 Pick!</h1>

          <Row xs={1} sm={2} md={2} lg={3} className="mt-2">
            {data?.map((v) => {
              return (
                <ListCard key={v._id} data={v} region={v.region as string} />
              );
            })}
          </Row>
        </>
      )}
    </>
  );
}
