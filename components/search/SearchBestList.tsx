import { useSearchParams } from 'next/navigation';
import ListCard from '../list/ListCard';
import { IDetailInfo } from '@/pages/api/api';
import { Row } from 'react-bootstrap';
import { regionNames } from '@/data/region';
import { loadSearchBest } from '@/pages/api/search';
import { useQuery } from '@tanstack/react-query';
import ListCardPlaceholder from '../list/ListCardPlaceholder';

export default function SearchBestList() {
  const searchParams = useSearchParams();
  const region = searchParams.get('region') as string;

  const title = region ? regionNames[region] : '';

  const { data, isLoading } = useQuery<IDetailInfo[]>(
    ['bestSearchtData', region],
    () => loadSearchBest(region),
  );

  return (
    <>
      <h1 className="fs-2 mt-3">
        ✨ {region ? `${title}의` : '트랜디한'} 트립로그의 Pick!
      </h1>

      {isLoading ? (
        <Row xs={1} sm={2} md={2} lg={3} className="mt-2">
          {Array.from({ length: 6 }).map((_, i) => (
            <ListCardPlaceholder key={i} />
          ))}
        </Row>
      ) : (
        <Row xs={1} sm={2} md={2} lg={3} className="mt-2">
          {data?.map((v) => (
            <ListCard
              key={v._id}
              data={v}
              region={region ? region : (v.region as string)}
            />
          ))}
        </Row>
      )}
    </>
  );
}
