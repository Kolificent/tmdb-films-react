import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { selectDialogStatus } from '../../selectors/selectors';
import { changeEmail, closeDialog } from '../../slices/dialogReducer';
import { DIALOG_STATUSES } from '../../constants';

function SignUpDialog() {
  const dialogStatus = useAppSelector(selectDialogStatus);
  const dispatch = useAppDispatch();

  const isOpen = dialogStatus === DIALOG_STATUSES.SIGN_UP;

  function handleClose() {
    dispatch(closeDialog());
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const formJson = Object.fromEntries((formData as any).entries());
    const email = formJson.email;
    console.log('Отправляем на почту токен (нет)', email);

    dispatch(changeEmail());
  }

  function handleSkipButton() {
    dispatch(changeEmail());
  }

  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      PaperProps={{
        component: 'form',
        onSubmit: handleSubmit,
      }}
    >
      <DialogTitle>Регистрация</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Введите свою почту для получения токена аутентификации
        </DialogContentText>
        <TextField
          autoFocus
          required
          margin="dense"
          name="email"
          label="Почта"
          type="email"
          fullWidth
          variant="standard"
        />
      </DialogContent>
      <DialogActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button sx={{ alignSelf: 'start' }} onClick={handleSkipButton}>
          Уже есть токен?
        </Button>
        <Box>
          <Button onClick={handleClose}>Отмена</Button>
          <Button type="submit">Запросить</Button>
        </Box>
      </DialogActions>
    </Dialog>
  );
}

export default SignUpDialog;
