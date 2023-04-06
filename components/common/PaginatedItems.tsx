import { ITEMS_COUNT_PER_PAGE, PAGE_RANGE_DISPLAY, TOTAL_ITEMS_COUNT_NULL } from '@/constants/units';
import { PaginationWrapper } from '@/styles/styled';
import Pagination from 'react-js-pagination';

interface IPaginatedItemsProps {
  page: number;
  total: number | undefined;
  handlePageChange: (page: number) => void;
}

export default function PaginatedItems({
  page,
  total,
  handlePageChange,
}: IPaginatedItemsProps) {
  return (
    <PaginationWrapper>
      <Pagination
        activePage={page}
        itemsCountPerPage={ITEMS_COUNT_PER_PAGE}
        totalItemsCount={total || TOTAL_ITEMS_COUNT_NULL}
        pageRangeDisplayed={PAGE_RANGE_DISPLAY}
        prevPageText={'<'}
        nextPageText={'>'}
        onChange={handlePageChange}
      />
    </PaginationWrapper>
  );
}
