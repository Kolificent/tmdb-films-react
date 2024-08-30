import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FavoriteFilmData, FilmDetails, User } from '../contracts';
import { DEFAULT_USER } from '../constants';
import { getRequest, postRequest } from '../requests';
import { RootState } from '../store/store';

export const initializeUser = createAsyncThunk(
  'user/initializeUser',
  async () => {
    const userInfo = await getRequest('/account/account_id');
    const userFavorites = await getRequest(
      `/account/${userInfo.id}/favorite/movies`,
    );
    const favoritesIds = userFavorites.results.map(
      (film: FilmDetails) => film.id,
    );
    const user: User = {
      id: userInfo.id,
      username: userInfo.username,
      favorites: favoritesIds,
    };
    return user;
  },
);

export const changeFavorites = createAsyncThunk(
  'user/changeFavorites',
  async (
    { filmId, isFavorite }: { filmId: number; isFavorite: boolean },
    { getState },
  ) => {
    // насколько это хорошо так писать?
    const state = getState() as RootState;
    const userId = state.userReducer.id;
    const body = JSON.stringify({
      media_type: 'movie',
      media_id: filmId,
      favorite: isFavorite,
    });

    const data: FavoriteFilmData = await postRequest(
      `/account/${userId}/favorite`,
      body,
    );
    return data;
  },
);

const userSlice = createSlice({
  name: 'user',
  initialState: DEFAULT_USER,
  reducers: {
    resetUser: () => DEFAULT_USER,
  },
  extraReducers: (builder) => {
    builder
      .addCase(initializeUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        initializeUser.fulfilled,
        (state, action: PayloadAction<User>) => {
          return { ...action.payload, isLoading: false, error: null };
        },
      )
      .addCase(initializeUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
    builder
      .addCase(changeFavorites.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(changeFavorites.fulfilled, (state, action) => {
        state.isLoading = false;
        if (!action.payload.success) {
          state.error = 'Ошибка!';
          return;
        }
        const { filmId, isFavorite: favorite } = action.meta.arg;
        if (favorite) {
          state.favorites.push(filmId);
        } else {
          state.favorites = state.favorites.filter((id) => id !== filmId);
        }
        state.error = null;
      })
      .addCase(changeFavorites.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

const { actions, reducer: userReducer } = userSlice;
export const { resetUser } = actions;
export default userReducer;
