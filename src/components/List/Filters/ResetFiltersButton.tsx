import { IconButton } from '@mui/material';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import { useAppDispatch, useAppSelector } from '../../../store/store';
import { resetFilters } from '../../../slices/filtersReducer';
import { selectQuery } from '../../../selectors/selectors';

function ResetFiltersButton() {
  const query = useAppSelector(selectQuery);
  const dispatch = useAppDispatch();

  const isDisabled = Boolean(query);

  function handleClick() {
    dispatch(resetFilters());
  }

  return (
    <IconButton disabled={isDisabled} onClick={handleClick}>
      <RestartAltIcon />
    </IconButton>
  );
}

export default ResetFiltersButton;
