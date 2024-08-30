import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { Typography } from '@mui/material';
import { SyntheticEvent, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../store/store';
import { changeYears } from '../../../slices/filtersReducer';
import { MAX_YEAR, MIN_YEAR } from '../../../constants';
import {
  selectIsShowFavorites,
  selectQuery,
  selectYears,
} from '../../../selectors/selectors';

function SelectYears() {
  const years = useAppSelector(selectYears);
  const isShowFavorites = useAppSelector(selectIsShowFavorites);
  const query = useAppSelector(selectQuery);
  const dispatch = useAppDispatch();

  const [tempYears, setTempYears] = useState<number | number[]>(years);

  const isDisabled = Boolean(query) || isShowFavorites;

  const handleChangeYears = (e: Event, newValue: number | number[]) => {
    setTempYears(newValue);
  };

  const handleChangeYearsCommitted = (
    e: Event | SyntheticEvent,
    newValue: number | number[],
  ) => {
    const value = newValue as number[];
    dispatch(changeYears(value));
  };

  return (
    <Box>
      <Typography>Год выхода:</Typography>
      <Slider
        disabled={isDisabled}
        sx={{ marginTop: 6 }}
        getAriaLabel={() => 'Year Range'}
        value={tempYears}
        onChange={handleChangeYears}
        onChangeCommitted={handleChangeYearsCommitted}
        valueLabelDisplay="on"
        min={MIN_YEAR}
        max={MAX_YEAR}
        getAriaValueText={(value) => `${value}`}
      />
    </Box>
  );
}

export default SelectYears;
