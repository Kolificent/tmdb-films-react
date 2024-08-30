import { Box } from '@mui/material';
import Filters from '../components/List/Filters/Filters';
import FilmsGrid from '../components/List/FilmsGrid/FilmsGrid';

function List() {
  return (
    <Box
      component="main"
      display="flex"
      flexDirection="row"
      gap={3}
      p={3}
      width="100%"
      flexGrow={1}
    >
      <Filters />
      <FilmsGrid />
    </Box>
  );
}
export default List;
