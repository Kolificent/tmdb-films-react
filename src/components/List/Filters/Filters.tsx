import { Box, Paper, Typography } from '@mui/material';
import SelectGenres from './SelectGenres';
import SelectSort from './SelectSort';
import SelectYears from './SelectYears';
import ResetFiltersButton from './ResetFiltersButton';
import FiltersPagination from './FiltersPagination';
import ShowFavoritesCheckbox from './ShowFavoritesCheckbox';

function Filters() {
  return (
    <Paper
      variant="outlined"
      sx={{
        width: '400px',
        p: 3,
        display: 'flex',
        flexDirection: 'column',
        gap: 3,
      }}
    >
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography>Фильтры</Typography>
        <ResetFiltersButton />
      </Box>
      <SelectGenres />
      <SelectSort />
      <SelectYears />
      <ShowFavoritesCheckbox />
      <FiltersPagination />
    </Paper>
  );
}

export default Filters;
