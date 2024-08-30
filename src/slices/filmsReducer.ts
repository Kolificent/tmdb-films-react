import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getRequest } from '../requests';
import { RootState } from '../store/store';
import buildRequestParameters from '../utils/buildQueryParameters';
import { DEFAULT_FILMS_LIST } from '../constants';

export const updateFilms = createAsyncThunk(
  'filmsList/updateFilms',
  async (data, { getState }) => {
    const state = getState() as RootState;
    const filters = state.filtersReducer;
    const query = state.queryReducer;
    const userId = state.userReducer.id;

    const requestParameters = buildRequestParameters(userId, query, filters);
    const filmsData = await getRequest(requestParameters);

    return filmsData.results;
  },
);

const filmsListSlice = createSlice({
  name: 'filmsList',
  initialState: DEFAULT_FILMS_LIST,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updateFilms.fulfilled, (state, action) => {
        return {
          ...state,
          films: action.payload,
          isLoading: false,
          error: null,
        };
      })
      .addCase(updateFilms.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateFilms.rejected, (state, action) => {
        state.isLoading = false;
        if (action.error.message) {
          state.error = action.error.message;
        }
      });
  },
});

const { reducer: filmsReducer } = filmsListSlice;
export default filmsReducer;
