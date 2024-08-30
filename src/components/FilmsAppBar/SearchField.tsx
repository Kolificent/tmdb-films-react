import { Box, TextField } from '@mui/material';
import { ChangeEvent, useEffect, useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { selectIsShowFavorites, selectQuery } from '../../selectors/selectors';
import { changeQuery } from '../../slices/queryReducer';

function SearchField() {
  const isDisabled = useAppSelector(selectIsShowFavorites);
  const initialQuery = useAppSelector(selectQuery);
  const [tempQuery, setTempQuery] = useState(initialQuery);
  const dispatch = useAppDispatch();
  const debounceTime = 400;
  const debouncedSetQuery = useDebouncedCallback((value) => {
    dispatch(changeQuery(value));
  }, debounceTime);

  useEffect(() => {
    setTempQuery(initialQuery);
  }, [initialQuery]);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const input = e.target.value;
    setTempQuery(input);
    debouncedSetQuery(input);
  }

  return (
    <Box>
      <TextField
        disabled={isDisabled}
        value={tempQuery}
        onChange={handleChange}
        // немного костыльное отбеливание инпута)
        InputLabelProps={{
          style: { color: '#ffffff' },
        }}
        InputProps={{
          style: { color: '#ffffff' },
        }}
        sx={{
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#ffffff',
            },
            '&:hover fieldset': {
              borderColor: '#ffffff',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#ffffff',
            },
            width: '40vh',
          },
        }}
        label="Поиск"
        variant="outlined"
        size="small"
      />
    </Box>
  );
}

export default SearchField;
