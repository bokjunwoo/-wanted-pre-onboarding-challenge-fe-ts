import { Col, Container, Row } from 'react-bootstrap';
import Footer from './Footer';
import Header from './Header';
import styled from 'styled-components';

type AppLayoutProps = {
  children: React.ReactNode;
};

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <>
      <Header />

      <MainContainer className="m-auto">
        <Col xs={12} md={12} lg={1} xl={1} xxl={2}></Col>
        <Col xs={12} md={12} lg={10} xl={10} xxl={8}>
          <Container>{children}</Container>
        </Col>
        <Col xs={12} md={12} lg={1} xl={1} xxl={2}></Col>
      </MainContainer>

      <Footer />
    </>
  );
}

const MainContainer = styled(Row)`
  padding-top: 56px;
`;
