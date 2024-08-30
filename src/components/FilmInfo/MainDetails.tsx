import { Box, Rating, Typography } from '@mui/material';
import { MainDetailsProps } from '../../contracts';

function MainDetails({
  title,
  original_title,
  year,
  rating,
}: MainDetailsProps) {
  return (
    <Box display="flex" flexDirection="column">
      <Box display="flex">
        <Typography variant="h3" component="h3">
          {`${title} (${year})`}
        </Typography>
      </Box>
      <Typography variant="caption" fontSize="24px">
        {original_title}
      </Typography>
      {rating ? (
        <Rating name="read-only" value={rating} precision={0.5} readOnly />
      ) : (
        <Typography fontSize="16px">Нет оценок</Typography>
      )}
    </Box>
  );
}

export default MainDetails;
