import { Box, Button, IconButton } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { FavoriteButtonProps } from '../../contracts';

function FavoriteButton({ type, isFavorite, onClick }: FavoriteButtonProps) {
  const isButtonBig = type === 'big';

  return (
    <Box>
      {isButtonBig ? (
        <Button
          variant={isFavorite ? 'contained' : 'outlined'}
          startIcon={<FavoriteIcon />}
          onClick={onClick}
          color={isFavorite ? 'primary' : 'secondary'}
        >
          {isFavorite ? 'В избранном' : 'Добавить в избранное'}
        </Button>
      ) : (
        <IconButton onClick={onClick}>
          {isFavorite ? (
            <FavoriteIcon color="primary" />
          ) : (
            <FavoriteBorderIcon />
          )}
        </IconButton>
      )}
    </Box>
  );
}

export default FavoriteButton;
