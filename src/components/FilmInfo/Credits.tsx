import { Box } from '@mui/material';
import { CreditsProps } from '../../contracts';

function Credits({ credits }: CreditsProps) {
  return (
    <Box display="flex" gap={1} flexDirection="column">
      {credits.map((credit) => (
        <Box key={credit.id} display="flex" alignItems={'center'} gap={1}>
          <Box
            sx={{
              width: '4rem',
              height: '4rem',
              borderRadius: '50%',
              overflow: 'hidden',
              objectFit: 'cover',
            }}
            component="img"
            src={`https://image.tmdb.org/t/p/w200${credit.profile_path}`}
            alt={credit.name}
          />
          {credit.name}
        </Box>
      ))}
    </Box>
  );
}

export default Credits;
