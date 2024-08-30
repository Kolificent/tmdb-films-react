import { Box } from '@mui/material';

function ErrorPage() {
  return (
    <Box
      component="main"
      display="flex"
      flexDirection="row"
      gap={3}
      width="100%"
      p={3}
      flexGrow={1}
    >
      Ошибка!
    </Box>
  );
}

export default ErrorPage;
