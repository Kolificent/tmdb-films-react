import { Outlet } from 'react-router-dom';
import { Box, CircularProgress } from '@mui/material';
import Cookies from 'js-cookie';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store/store';
import { initializeUser } from '../slices/userReducer';
import { selectUserId } from '../selectors/selectors';

function ProtectedOutlet() {
  const token = Cookies.get('token');

  const userId = useAppSelector(selectUserId);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(initializeUser());
  }, [userId, dispatch]);

  return userId ? (
    <Outlet />
  ) : (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height={'100vh'}
    >
      {token ? <CircularProgress /> : <i>залогиньтесь пажожда...</i>}
    </Box>
  );
}

export default ProtectedOutlet;
