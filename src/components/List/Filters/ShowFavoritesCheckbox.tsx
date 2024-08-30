import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import {
  selectIsShowFavorites,
  selectQuery,
} from '../../../selectors/selectors';
import { useAppDispatch, useAppSelector } from '../../../store/store';
import { changeIsShowFavorites } from '../../../slices/filtersReducer';
import { ChangeEvent } from 'react';

function ShowFavoritesCheckbox() {
  const checked = useAppSelector(selectIsShowFavorites);
  const query = useAppSelector(selectQuery);
  const dispatch = useAppDispatch();

  const isDisabled = Boolean(query);

  function handleChangeCheckbox(e: ChangeEvent<HTMLInputElement>) {
    dispatch(changeIsShowFavorites(e.target.checked));
  }

  return (
    <FormGroup>
      <FormControlLabel
        control={
          <Checkbox
            disabled={isDisabled}
            checked={checked}
            onChange={handleChangeCheckbox}
            inputProps={{ 'aria-label': 'controlled' }}
          />
        }
        label="Показать только избранное"
      />
    </FormGroup>
  );
}

export default ShowFavoritesCheckbox;
