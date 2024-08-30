import {
  Box,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Paper,
  Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';
import FavoriteButton from '../../../ui/FavoriteButton';
import { useFavorite } from '../../../../hooks/useFavorites';
import { selectIsShowFavorites } from '../../../../selectors/selectors';
import { useAppSelector } from '../../../../store/store';
import { FilmCardProps } from '../../../../contracts';

function FilmCard({ id, poster_path, vote_average, title }: FilmCardProps) {
  const isShowFavorites = useAppSelector(selectIsShowFavorites);
  const { isFavorite, toggleFavorite } = useFavorite({ filmId: id });

  const isCardVisible = isShowFavorites && !isFavorite;

  if (isCardVisible) {
    return null;
  }

  return (
    <Card sx={{ width: '400px' }}>
      <Paper>
        <CardActionArea>
          <Link to={`../film/${id}`} relative="path">
            <CardMedia
              sx={{ height: '600px' }}
              component="img"
              image={'https://image.tmdb.org/t/p/w400' + poster_path}
              alt={title}
            />
          </Link>
        </CardActionArea>
        <Box display="flex">
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography variant="h3" component="h3" fontSize="24px">
              {title}
            </Typography>
            <Typography fontSize="14px" variant="caption">
              {vote_average ? `Рейтинг ${vote_average}` : 'Нет оценок'}
            </Typography>
          </CardContent>
          <CardActions>
            <FavoriteButton
              type="small"
              onClick={toggleFavorite}
              isFavorite={isFavorite}
            />
          </CardActions>
        </Box>
      </Paper>
    </Card>
  );
}

export default FilmCard;
