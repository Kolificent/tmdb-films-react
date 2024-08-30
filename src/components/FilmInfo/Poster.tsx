import { Box } from '@mui/material';
import { PosterProps } from '../../contracts';

function Poster({ poster_path, title }: PosterProps) {
  return (
    <Box
      sx={{
        width: '500px',
        height: '750px',
      }}
      component="img"
      src={`https://image.tmdb.org/t/p/w500${poster_path}`}
      alt={title}
    />
  );
}

export default Poster;
