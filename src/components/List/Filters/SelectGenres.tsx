import { Autocomplete, TextField } from '@mui/material';
import { Fragment, SyntheticEvent, useEffect } from 'react';
import { Genre } from '../../../contracts';
import { useAppDispatch, useAppSelector } from '../../../store/store';
import { changeGenres } from '../../../slices/filtersReducer';
import {
  selectGenresId,
  selectGenresList,
  selectIsShowFavorites,
  selectQuery,
} from '../../../selectors/selectors';
import { updateGenresList } from '../../../slices/genresListReducer';

function SelectGenres() {
  const isShowFavorites = useAppSelector(selectIsShowFavorites);
  const selectedGenresId = useAppSelector(selectGenresId);
  const query = useAppSelector(selectQuery);
  const genresList = useAppSelector(selectGenresList);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(updateGenresList());
  }, [dispatch]);

  const isDisabled = Boolean(query) || isShowFavorites;

  const genresId: Array<Genre['id']> = genresList.map((genre) => genre.id);

  function handleChangeGenres(e: SyntheticEvent, newValue: Array<Genre['id']>) {
    dispatch(changeGenres(newValue));
  }

  function getOptionLabel(option: Genre['id']): string {
    const genreName = genresList.find((genre) => genre.id === option);
    return genreName ? genreName.name : '';
  }

  return (
    <Fragment>
      {genresList && (
        <Autocomplete
          disabled={isDisabled}
          onChange={handleChangeGenres}
          value={selectedGenresId}
          multiple
          limitTags={2}
          options={genresId}
          getOptionLabel={getOptionLabel}
          renderInput={(params) => <TextField {...params} label="Жанры" />}
          size="small"
        />
      )}
    </Fragment>
  );
}

export default SelectGenres;
