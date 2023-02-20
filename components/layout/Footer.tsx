import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faN } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
  return (
    <>
      <hr className="clearfix w-100 mb-0" />
      <div className="container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 ">
          <div className=" d-flex align-items-center">
            <span className="text-muted">&copy; 2023 Copyright</span>
          </div>
          <ul
            className="nav justify-content-end list-unstyled d-flex ts-dark"
            style={{ fontSize: '1.2rem' }}
          >
            <li className="me-3">
              <Link href="" style={{ color: '#198754' }}>
                <FontAwesomeIcon icon={faGoogle} />
              </Link>
            </li>
            <li className="me-3">
              <Link href="https://url.kr/ka3rnf" style={{ color: '#198754' }}>
                <FontAwesomeIcon icon={faN} />
              </Link>
            </li>
            <li className="me-3">
              <Link
                href="https://github.com/TripLog-project/TripLog"
                style={{ color: '#198754' }}
              >
                <FontAwesomeIcon icon={faGithub} />
              </Link>
            </li>
          </ul>
        </footer>
      </div>
    </>
  );
}
