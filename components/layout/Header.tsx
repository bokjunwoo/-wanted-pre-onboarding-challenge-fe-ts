import Link from 'next/link';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMagnifyingGlass,
  faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import { userInfo, userlogout } from '@/pages/api/sign';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { Cursor } from '@/styles/styled';
import { useCallback, useState } from 'react';
import { ILogoutResult } from '@/pages/api/api';
import SignSuccess from '../modal/SignSuccess';
import UserImage from '../common/UserImage';

export default function Header() {
  const queryClient = useQueryClient();

  const [show, setShow] = useState(false);
  const [logoutResult, setLogoutResult] = useState<ILogoutResult>({
    type: 'logout',
    success: false,
    message: '',
  });

  const { data: user } = useQuery(['user'], userInfo);

  const mutationLogout = useMutation<ILogoutResult, AxiosError>(userlogout, {
    onSuccess: (result) => {
      setShow(true);
      setLogoutResult(result);
      queryClient.setQueryData(['user'], null);
    },
  });

  const onLogOut = useCallback(() => {
    mutationLogout.mutate();
  }, [mutationLogout]);

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
              <Link href={`/mypage/${user}`}>
                <Navbar.Brand>
                  <UserImage width="30px" height="30px" />
                </Navbar.Brand>
              </Link>
              <Cursor onClick={onLogOut}>
                <Navbar.Brand>
                  <FontAwesomeIcon icon={faRightFromBracket} />
                </Navbar.Brand>
              </Cursor>
            </div>
          ) : (
            <Link href="/login">
              <Navbar.Brand>
                <span className="fs-6 fw-bold">로그인/회원가입</span>
              </Navbar.Brand>
            </Link>
          )}
        </Container>
      </Navbar>
      <hr className="clearfix w-100 m-0" />

      <SignSuccess show={show} setShow={setShow} result={logoutResult} />
    </>
  );
}
