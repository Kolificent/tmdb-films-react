import {
  Dialog,
  FilmInfoFetch,
  FilmsListFetch,
  Filter,
  GenresListFetch,
  Pages,
  SortOption,
  User,
} from './contracts';

const API_URL = 'https://api.themoviedb.org/3';

const MAX_YEAR = new Date().getFullYear() + 5;
const MIN_YEAR = 1895;

const ANIMATION_TIME = 1000;

const DEFAULT_PAGES: Pages = { max: 474, current: 1 };

const SORT_OPTIONS: SortOption[] = [
  { id: 0, name: 'popularity', label: 'популярности' },
  { id: 1, name: 'vote_average', label: 'рейтингу' },
  { id: 2, name: 'revenue', label: 'доходу' },
];

const DEFAULT_FILTER: Filter = {
  sort: 0,
  isOrderAscending: false,
  years: [MIN_YEAR, MAX_YEAR],
  genresId: [],
  pages: DEFAULT_PAGES,
  isShowFavorites: false,
};

const DEFAULT_FILMS_LIST: FilmsListFetch = {
  films: [],
  isLoading: false,
  error: null,
};

const DIALOG_STATUSES = {
  IDLE: 'idle',
  LOGIN: 'login',
  SIGN_UP: 'sign_up',
};

const DEFAULT_USER: User = { id: '', username: '', favorites: [] };

const DEFAULT_DIALOG: Dialog = {
  status: DIALOG_STATUSES.IDLE,
};

const DEFAULT_GENRES_LIST: GenresListFetch = {
  genres: [],
  isLoading: false,
  error: null,
};

const DEFAULT_FILM_INFO: FilmInfoFetch = {
  filmDetails: null,
  filmCredits: [],
  isLoading: false,
  error: null,
};

const DEFAULT_QUERY: string = '';

export {
  DEFAULT_FILM_INFO,
  DEFAULT_GENRES_LIST,
  DEFAULT_FILMS_LIST,
  DEFAULT_QUERY,
  ANIMATION_TIME,
  API_URL,
  MAX_YEAR,
  MIN_YEAR,
  SORT_OPTIONS,
  DEFAULT_FILTER,
  DEFAULT_DIALOG,
  DIALOG_STATUSES,
  DEFAULT_USER,
};
