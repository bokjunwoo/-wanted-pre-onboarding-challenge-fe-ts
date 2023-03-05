import { Col, Container, Row } from 'react-bootstrap';
import Footer from './Footer';
import Header from './Header';

type AppLayoutProps = {
  children: React.ReactNode;
};

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <>
      <Header />

      <Row className="m-auto">
        <Col xs={12} md={12} lg={1} xl={1} xxl={2}></Col>
        <Col xs={12} md={12} lg={10} xl={10} xxl={8}>
          <Container>{children}</Container>
        </Col>
        <Col xs={12} md={12} lg={1} xl={1} xxl={2}></Col>
      </Row>

      <Footer />
    </>
  );
}
