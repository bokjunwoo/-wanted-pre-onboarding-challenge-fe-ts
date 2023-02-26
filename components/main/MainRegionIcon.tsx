import { IconData, iconData } from '@/data/region';
import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { Row, Col } from 'react-bootstrap';

export default function MainRegionIcon() {
  const router = useRouter();

  const handleClick = useCallback((region: string) => {
    router.push(`submain/${region}`);
  }, []);

  return (
    <Row
      lg={6}
      xs={3}
      className="d-flex col-lg-8 col-sm-8 mx-auto text-center mt-5"
    >
      {iconData.map((data: IconData) => (
        <Col
          key={data.id}
          style={{ cursor: 'pointer' }}
          onClick={() => {
            handleClick(data.region);
          }}
        >
          <img src={data.image} alt={data.image} className="w-50" />
          <p className="fw-bold">{data.name}</p>
        </Col>
      ))}
    </Row>
  );
}
