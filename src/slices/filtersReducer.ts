import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DEFAULT_FILTER } from '../constants';
import { Filter } from '../contracts';

const filtersSlice = createSlice({
  name: 'query',
  initialState: DEFAULT_FILTER,
  reducers: {
    resetFilters: () => DEFAULT_FILTER,
    changeSort: (state, action: PayloadAction<Filter['sort']>) => {
      return {
        ...state,
        sort: action.payload,
        pages: { ...state.pages, current: DEFAULT_FILTER.pages.current },
      };
    },
    changeOrder: (state, action: PayloadAction<Filter['isOrderAscending']>) => {
      return {
        ...state,
        isOrderAscending: action.payload,
        pages: { ...state.pages, current: DEFAULT_FILTER.pages.current },
      };
    },
    changeYears: (state, action: PayloadAction<Filter['years']>) => {
      return {
        ...state,
        years: action.payload,
        pages: { ...state.pages, current: DEFAULT_FILTER.pages.current },
      };
    },
    changeGenres: (state, action: PayloadAction<Filter['genresId']>) => {
      return {
        ...state,
        genresId: action.payload,
        pages: { ...state.pages, current: DEFAULT_FILTER.pages.current },
      };
    },
    changeMaxPage: (state, action: PayloadAction<Filter['pages']['max']>) => {
      return {
        ...state,
        pages: {
          ...state.pages,
          max: Math.min(action.payload, DEFAULT_FILTER.pages.max),
        },
      };
    },
    changeCurrentPage: (
      state,
      action: PayloadAction<Filter['pages']['current']>,
    ) => {
      return {
        ...state,
        pages: { ...state.pages, current: action.payload },
      };
    },
    changeIsShowFavorites: (
      state,
      action: PayloadAction<Filter['isShowFavorites']>,
    ) => {
      return {
        ...state,
        isShowFavorites: action.payload,
        pages: { ...state.pages, current: DEFAULT_FILTER.pages.current },
      };
    },
  },
});

const { actions, reducer: filtersReducer } = filtersSlice;
export const {
  resetFilters,
  changeSort,
  changeOrder,
  changeYears,
  changeGenres,
  changeMaxPage,
  changeCurrentPage,
  changeIsShowFavorites,
} = actions;
export default filtersReducer;
