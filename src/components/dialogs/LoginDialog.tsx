import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from '@mui/material';
import Cookies from 'js-cookie';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { selectDialogStatus } from '../../selectors/selectors';
import { closeDialog } from '../../slices/dialogReducer';
import { initializeUser } from '../../slices/userReducer';
import { DIALOG_STATUSES } from '../../constants';

function LoginDialog() {
  const dialogStatus = useAppSelector(selectDialogStatus);
  const dispatch = useAppDispatch();

  const isOpen = dialogStatus === DIALOG_STATUSES.LOGIN;

  function handleClose() {
    dispatch(closeDialog());
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const formJson = Object.fromEntries(formData.entries());
    const token = formJson.token as string;
    Cookies.set('token', token, { expires: 1 });

    dispatch(initializeUser());
    dispatch(closeDialog());
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
      <DialogTitle>Вход</DialogTitle>
      <DialogContent>
        <DialogContentText>Введите полученный токен</DialogContentText>
        <TextField
          autoFocus
          required
          margin="dense"
          name="token"
          label="Токен"
          type="text"
          fullWidth
          variant="standard"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Отмена</Button>
        <Button type="submit">Ок</Button>
      </DialogActions>
    </Dialog>
  );
}

export default LoginDialog;
