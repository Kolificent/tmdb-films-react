import {
  Box,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../../store/store';
import { changeOrder, changeSort } from '../../../slices/filtersReducer';
import { SORT_OPTIONS } from '../../../constants';
import ImportExportIcon from '@mui/icons-material/ImportExport';
import {
  selectIsOrderAscending,
  selectIsShowFavorites,
  selectQuery,
  selectSort,
} from '../../../selectors/selectors';

const SORT_LABEL = 'Сортировать по';

function SelectSort() {
  const sort = useAppSelector(selectSort);
  const isOrderAscending = useAppSelector(selectIsOrderAscending);
  const isShowFavorites = useAppSelector(selectIsShowFavorites);
  const query = useAppSelector(selectQuery);
  const dispatch = useAppDispatch();

  const isDisabled = Boolean(query) || isShowFavorites;

  function handleChangeSort(e: SelectChangeEvent) {
    dispatch(changeSort(+e.target.value));
  }

  function handleOrderButton() {
    dispatch(changeOrder(!isOrderAscending));
  }

  return (
    <Box display="flex" alignItems="center" gap={1}>
      <FormControl fullWidth size="small">
        <InputLabel>{SORT_LABEL}</InputLabel>
        <Select
          value={sort.toString()}
          label={SORT_LABEL}
          onChange={handleChangeSort}
          disabled={isDisabled}
        >
          {SORT_OPTIONS.map((option) => (
            <MenuItem key={option.id} id={option.name} value={option.id}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <IconButton
        disabled={isDisabled}
        onClick={handleOrderButton}
        color={isOrderAscending ? 'primary' : 'default'}
      >
        <ImportExportIcon />
      </IconButton>
    </Box>
  );
}

export default SelectSort;
