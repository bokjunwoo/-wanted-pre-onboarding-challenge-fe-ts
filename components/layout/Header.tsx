import Link from 'next/link';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  return (
    <>
      <Navbar expand="lg" className="my-1">
        <Container>
          <Link href="/">
            <Navbar.Brand>
              <img
                src="/images/Logo.png"
                style={{ width: '30px' }}
                alt="로고"
              ></img>
              TripLog
            </Navbar.Brand>
          </Link>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-center"
          >
            <Nav>
              <Navbar.Text>
                <Link href="/submain/seoul" className="m-3 me-3 mt-1 mb-1">
                  서울
                </Link>
              </Navbar.Text>

              <Navbar.Text>
                <Link href="/submain/busan" className="ms-3 me-3 mt-1 mb-1">
                  부산
                </Link>
              </Navbar.Text>

              <Navbar.Text>
                <Link href="/submain/gangneung" className="ms-3 me-3 mt-1 mb-1">
                  강릉
                </Link>
              </Navbar.Text>

              <Navbar.Text>
                <Link href="/submain/gyeongju" className="ms-3 me-3 mt-1 mb-1">
                  경주
                </Link>
              </Navbar.Text>

              <Navbar.Text>
                <Link href="/submain/jeonju" className="ms-3 me-3 mt-1 mb-1">
                  전주
                </Link>
              </Navbar.Text>

              <Navbar.Text>
                <Link href="/submain/jeju" className="ms-3 me-3 mt-1 mb-1">
                  제주
                </Link>
              </Navbar.Text>
            </Nav>
          </Navbar.Collapse>

          <Navbar.Brand>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </Navbar.Brand>

          <Link href="/login">
            <Navbar.Brand>
              <FontAwesomeIcon icon={faUser} />
            </Navbar.Brand>
          </Link>
        </Container>
      </Navbar>
      <hr className="clearfix w-100 m-0" />
    </>
  );
}
