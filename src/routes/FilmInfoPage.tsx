import { Box, CircularProgress, Container, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import FavoriteButton from '../components/ui/FavoriteButton';
import { useEffect } from 'react';
import { resetFilmInfo, updateFilmInfo } from '../slices/filmInfoReducer';
import { useAppDispatch, useAppSelector } from '../store/store';
import { selectFilmDetails } from '../selectors/selectors';
import { useFavorite } from '../hooks/useFavorites';
import MainDetails from '../components/FilmInfo/MainDetails';
import SubDetails from '../components/FilmInfo/SubDetails';
import { MainDetailsProps, PosterProps, SubDetailsProps } from '../contracts';
import Credits from '../components/FilmInfo/Credits';
import Poster from '../components/FilmInfo/Poster';

function FilmInfoPage() {
  const filmId = useParams<{ id: string }>().id as string;
  const filmInfo = useAppSelector(selectFilmDetails);
  const isLoading = filmInfo.isLoading;
  const error = filmInfo.error;
  const { isFavorite, toggleFavorite } = useFavorite({ filmId: +filmId });
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!filmId) return;
    dispatch(updateFilmInfo({ id: +filmId }));
    return () => {
      dispatch(resetFilmInfo());
    };
  }, [filmId, dispatch]);

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

  const details = filmInfo.filmDetails;
  const credits = filmInfo.filmCredits;

  const isInfoValid = !filmId || !details || !credits;
  if (isInfoValid) {
    return null;
  }

  const {
    title,
    release_date,
    overview,
    original_title,
    tagline,
    vote_average,
    production_countries,
    genres,
    budget,
    runtime,
    poster_path,
  } = details;

  const year = release_date.substring(0, 4);
  const country = production_countries[0]?.name;
  const genreList = genres.map((genre) => genre.name).join(', ');
  const rating = vote_average / 2;
  const topCredits = credits.slice(0, 5);

  const poster: PosterProps = { poster_path, title };
  const mainDetails: MainDetailsProps = { title, original_title, year, rating };
  const subDetails: SubDetailsProps = { country, genreList, budget, runtime };

  return (
    <Container
      component="main"
      sx={{
        flexGrow: 1,
        p: 3,
        display: 'flex',
        flexDirection: 'row',
        gap: 3,
      }}
    >
      <Poster {...poster} />
      <Box display="flex" flexDirection="column" gap={3}>
        <MainDetails {...mainDetails} />
        <FavoriteButton
          type="big"
          isFavorite={isFavorite}
          onClick={toggleFavorite}
        />
        <Box>
          <Typography fontSize="16px">{overview}</Typography>
        </Box>
        <SubDetails {...subDetails} />
        {!!tagline && (
          <Box>
            <Typography fontStyle="italic">{tagline}</Typography>
          </Box>
        )}
        <Credits credits={topCredits} />
      </Box>
    </Container>
  );
}

export default FilmInfoPage;
