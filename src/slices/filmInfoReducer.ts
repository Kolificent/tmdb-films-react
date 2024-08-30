import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { FilmDetails } from '../contracts';
import { getRequest } from '../requests';
import { DEFAULT_FILM_INFO } from '../constants';

export const updateFilmInfo = createAsyncThunk(
  'film/updateFilmInfo',
  async ({ id }: { id: FilmDetails['id'] }) => {
    const [filmInfo, filmCredits] = await Promise.all([
      getRequest(`/movie/${id}?language=ru-RU`),
      getRequest(`/movie/${id}/credits?language=ru-RU`),
    ]);
    return { details: filmInfo, credits: filmCredits.cast };
  },
);

const filmInfoSlice = createSlice({
  name: 'filmInfo',
  initialState: DEFAULT_FILM_INFO,
  reducers: {
    resetFilmInfo: () => DEFAULT_FILM_INFO,
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateFilmInfo.fulfilled, (state, action) => {
        return {
          ...state,
          filmDetails: action.payload.details,
          filmCredits: action.payload.credits,
          isLoading: false,
          error: null,
        };
      })
      .addCase(updateFilmInfo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateFilmInfo.rejected, (state, action) => {
        state.isLoading = false;
        if (action.error.message) {
          state.error = action.error.message;
        }
      });
  },
});

const { actions, reducer: filmInfoReducer } = filmInfoSlice;
export const { resetFilmInfo } = actions;
export default filmInfoReducer;
