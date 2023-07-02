import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import useInput from '../hooks/useInput';
import ToastMessage from '../toast/ToastMessage';
import SearchModal from '../modal/SearchModal';
import { useRouter } from 'next/router';
import { useSearchData } from '@/usequery/useSearch';

export default function PlanListForm() {
  const router = useRouter();
  const { region } = router.query as { region: string };

  const searchHelper = () => {
    if (search.length === 0) {
      setToastShow(true);
      return;
    }
    setSearchShow(true);
  };

  const [search, onChangeSearch, setSearch] = useInput('');
  const [toastShow, setToastShow] = useState(false);
  const [searchShow, setSearchShow] = useState(false);

  const { searchData, searchDataLoading } = useSearchData(region, search);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchHelper();
  };

  return (
    <>
      <Form
        className="d-flex justify-content-center align-items-center"
        onSubmit={handleSubmit}
      >
        <Form.Control
          type="text"
          placeholder="검색어를 입력해주세요"
          className="p-1 w-50 me-2"
          value={search}
          onChange={onChangeSearch}
        />
        <Button variant="secondary" type="submit" size="sm">
          검색
        </Button>
      </Form>

      <ToastMessage
        show={toastShow}
        setShow={setToastShow}
        message="검색어를 입력해주세요."
        variant="danger"
      />
      <SearchModal show={searchShow} setShow={setSearchShow} />
    </>
  );
}
