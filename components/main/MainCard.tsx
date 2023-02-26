import { Row, Col, Card } from 'react-bootstrap';
import { mainCardData } from '@/data/region';

export default function MainCard() {

  return (
    <Row xs={1} md={2} lg={4} className="g-4 mt-3 mb-5">
      {mainCardData.map((data) => (
        <Col key={data.id}>
          <Card style={{ border: 'none' }}>
            <Card.Img
              variant="top"
              src={data.image}
              className="p-0"
            />
            <Card.ImgOverlay className="p-0">
              <Card.Body className="p-0">
                <Card.Text
                  className="fw-bold fs-5 rounded p-4"
                  style={{
                    backgroundImage:
                      'linear-gradient(0deg, rgba(0, 0, 0, 0), #c8c8c8) ',
                    color: '#f6f6f6',
                  }}
                >
                  {data.text}
                </Card.Text>
              </Card.Body>
            </Card.ImgOverlay>
          </Card>
        </Col>
      ))}
    </Row>
  );
}
