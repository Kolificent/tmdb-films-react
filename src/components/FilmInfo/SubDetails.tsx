import { Box, Typography } from '@mui/material';
import formatBudget from '../../utils/formatBudget';
import { SubDetailsProps } from '../../contracts';

function SubDetails({ country, genreList, budget, runtime }: SubDetailsProps) {
  return (
    <Box>
      <Typography>
        <b>Страна: </b>
        {country}
      </Typography>
      <Typography>
        <b>Жанры: </b>
        {genreList}
      </Typography>
      {!!budget && (
        <Typography>
          <b>Бюджет: </b>
          {formatBudget(budget)}
        </Typography>
      )}
      <Typography>
        <b>Время: </b>
        {runtime} минут
      </Typography>
    </Box>
  );
}

export default SubDetails;
