import { RootState } from '../store/store';

const selectFilters = (state: RootState) => state.filtersReducer;
const selectSort = (state: RootState) => state.filtersReducer.sort;
const selectIsOrderAscending = (state: RootState) =>
  state.filtersReducer.isOrderAscending;
const selectYears = (state: RootState) => state.filtersReducer.years;
const selectGenresId = (state: RootState) => state.filtersReducer.genresId;
const selectPages = (state: RootState) => state.filtersReducer.pages;
const selectIsShowFavorites = (state: RootState) =>
  state.filtersReducer.isShowFavorites;

const selectQuery = (state: RootState) => state.queryReducer;

const selectFilms = (state: RootState) => state.filmsReducer;

const selectFilmDetails = (state: RootState) => state.filmInfoReducer;

const selectDialogStatus = (state: RootState) => state.dialogReducer.status;

const selectUserId = (state: RootState) => state.userReducer.id;
const selectUserFavorites = (state: RootState) => state.userReducer.favorites;
const selectUsername = (state: RootState) => state.userReducer.username;

const selectGenresList = (state: RootState) => state.genresListReducer.genres;

export {
  selectFilters,
  selectPages,
  selectGenresId,
  selectSort,
  selectIsOrderAscending,
  selectYears,
  selectIsShowFavorites,
  selectQuery,
  selectFilms,
  selectFilmDetails,
  selectDialogStatus,
  selectUserFavorites,
  selectUserId,
  selectUsername,
  selectGenresList,
};
