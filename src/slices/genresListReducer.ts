import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getRequest } from '../requests';
import { DEFAULT_GENRES_LIST } from '../constants';

export const updateGenresList = createAsyncThunk(
  'genresList/updateGenres',
  async (data) => {
    const genresInfo = await getRequest('/genre/movie/list?language=ru');
    return genresInfo.genres;
  },
);

const genresListSlice = createSlice({
  name: 'genresList',
  initialState: DEFAULT_GENRES_LIST,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updateGenresList.fulfilled, (state, action) => {
        return {
          ...state,
          genres: action.payload,
          isLoading: false,
          error: null,
        };
      })
      .addCase(updateGenresList.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateGenresList.rejected, (state, action) => {
        state.isLoading = false;
        if (action.error.message) {
          state.error = action.error.message;
        }
      });
  },
});

const { reducer: genresListReducer } = genresListSlice;
export default genresListReducer;
