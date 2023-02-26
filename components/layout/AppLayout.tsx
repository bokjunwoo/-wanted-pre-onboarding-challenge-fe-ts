import { Container } from 'react-bootstrap';
import Footer from './Footer';
import Header from './Header';

type AppLayoutProps = {
  children: React.ReactNode;
};

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <>
      <Header />

      <Container>{children}</Container>

      <Footer />
    </>
  );
}
