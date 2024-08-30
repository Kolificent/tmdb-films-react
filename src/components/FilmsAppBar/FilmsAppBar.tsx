import { Fragment } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { openDialog } from '../../slices/dialogReducer';
import { resetUser } from '../../slices/userReducer';
import { selectUsername } from '../../selectors/selectors';
import SearchField from './SearchField';

function FilmsAppBar() {
  const username = useAppSelector(selectUsername);
  const dispatch = useAppDispatch();

  function handleClick() {
    dispatch(openDialog());
  }

  function handleLogout() {
    Cookies.remove('token');
    dispatch(resetUser());
  }

  return (
    <Fragment>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <CssBaseline />
        <AppBar component="nav">
          <Toolbar>
            <Typography
              variant="h6"
              component={Link}
              to={`..`}
              style={{ textDecoration: 'none', color: 'inherit' }}
              relative="path"
            >
              Фильмы
            </Typography>
            <Box flexGrow={1} display="flex" justifyContent="center">
              <SearchField />
            </Box>
            <Box display="flex" alignItems="center" gap={2}>
              {username ? (
                <Box display="flex" alignItems="center" gap={4}>
                  <Box display="flex" alignItems="center" gap={1}>
                    <AccountCircleIcon />
                    <Typography variant="button">{username}</Typography>
                  </Box>
                  <IconButton onClick={handleLogout} sx={{ color: '#fff' }}>
                    <LogoutIcon />
                  </IconButton>
                </Box>
              ) : (
                <IconButton color="inherit" onClick={handleClick}>
                  <AccountCircleIcon />
                </IconButton>
              )}
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      <Toolbar />
    </Fragment>
  );
}

export default FilmsAppBar;
