import { Box, CircularProgress, Grid } from '@mui/material';
import FilmCard from './FilmCard/FilmCard';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../store/store';
import {
  selectFilms,
  selectFilters,
  selectQuery,
} from '../../../selectors/selectors';
import { updateFilms } from '../../../slices/filmsReducer';

function FilmsGrid() {
  const filters = useAppSelector(selectFilters);
  const query = useAppSelector(selectQuery);
  const filmsData = useAppSelector(selectFilms);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(updateFilms());
  }, [filters, query, dispatch]);

  const { films, isLoading, error } = filmsData;

  if (isLoading || error) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height={1}
        width={1}
        gap={3}
        flexDirection="column"
      >
        <CircularProgress />
        {error}
      </Box>
    );
  }

  return (
    <Grid container spacing={1}>
      {films.map((film) => (
        <Grid item key={film.id}>
          <FilmCard
            id={film.id}
            title={film.title}
            poster_path={film.poster_path}
            vote_average={film.vote_average}
          />
        </Grid>
      ))}
    </Grid>
  );
}

export default FilmsGrid;
