import { Pagination } from '@mui/material';
import { ChangeEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../../store/store';
import { selectPages } from '../../../selectors/selectors';
import { changeCurrentPage } from '../../../slices/filtersReducer';

function FiltersPagination() {
  const pages = useAppSelector(selectPages);
  const dispatch = useAppDispatch();

  function handleChangePage(e: ChangeEvent<unknown>, page: number) {
    dispatch(changeCurrentPage(page));
  }

  return (
    <Pagination
      size="small"
      sx={{ width: 1, display: 'flex', justifyContent: 'center' }}
      count={pages.max}
      shape="rounded"
      page={pages.current}
      onChange={handleChangePage}
    />
  );
}

export default FiltersPagination;
