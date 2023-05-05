import Link from 'next/link';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faMagnifyingGlass,
  faRightFromBracket,
  faHouse,
} from '@fortawesome/free-solid-svg-icons';
import { userInfo } from '@/pages/api/sign';
import { useQuery } from '@tanstack/react-query';

export default function Header() {
  const { data: user } = useQuery(['user'], userInfo);

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

          {user ? (
            <div>
              <Link href="/logout">
                <Navbar.Brand>
                  <FontAwesomeIcon icon={faHouse} />
                </Navbar.Brand>
              </Link>
              <Link href="/logout">
                <Navbar.Brand>
                  <FontAwesomeIcon icon={faRightFromBracket} />
                </Navbar.Brand>
              </Link>
            </div>
          ) : (
            <Link href="/login">
              <Navbar.Brand>
                <FontAwesomeIcon icon={faUser} />
              </Navbar.Brand>
            </Link>
          )}
        </Container>
      </Navbar>
      <hr className="clearfix w-100 m-0" />
    </>
  );
}
