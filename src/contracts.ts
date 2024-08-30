import { DIALOG_STATUSES } from './constants';

interface User {
  id: string;
  username: string;
  favorites: Array<FilmDetails['id']>;
  // не знаю норм ли хранить такие статусы
  isLoading?: boolean;
  error?: string | null;
}

interface FilmInfoFetch {
  filmDetails: FilmDetails | null;
  filmCredits: FilmCreditsDetails[];
  isLoading: boolean;
  error: string | null;
}
interface FilmCardProps {
  id: FilmDetails['id'];
  title: FilmDetails['title'];
  vote_average: FilmDetails['vote_average'];
  poster_path: FilmDetails['poster_path'];
  popularity?: number;
  genre_ids?: Array<Genre['id']>;
  release_date?: string;
}

interface MainDetailsProps {
  title: FilmDetails['title'];
  original_title: FilmDetails['original_title'];
  year: FilmDetails['release_date'];
  rating: FilmDetails['vote_average'];
}

interface GenresListFetch {
  genres: Genre[];
  isLoading: boolean;
  error: string | null;
}

interface FavoriteFilmData {
  success: boolean;
  status_code: number;
  status_message: string;
}

interface Pages {
  max: number;
  current: number;
}

interface SortOption {
  id: number;
  name: string;
  label: string;
}

interface UseFavoriteParams {
  filmId: number;
}

interface UseFavoriteReturn {
  isFavorite: boolean;
  toggleFavorite: () => void;
}

interface FavoriteButtonProps {
  type: 'small' | 'big';
  isFavorite: boolean;
  onClick: () => void;
}

interface Dialog {
  status: typeof DIALOG_STATUSES.IDLE;
}

interface Filter {
  sort: SortOption['id'];
  isOrderAscending: boolean;
  years: number[];
  genresId: Array<Genre['id']>;
  pages: Pages;
  isShowFavorites: boolean;
}

interface FilmDetails {
  id: number;
  title: string;
  original_title: string;
  tagline: string;
  release_date: string;
  vote_average: number;
  overview: string;
  budget: number;
  genres: Genre[];
  poster_path: string;
  runtime: number;
  production_countries: Country[];
}

interface FilmsListFetch {
  films: FilmDetails[];
  isLoading: boolean;
  error: string | null;
}

interface Genre {
  id: string;
  name: string;
}

interface Country {
  iso_3166_1: string;
  name: string;
}

interface CreditsProps {
  credits: FilmCreditsDetails[];
}

interface FilmCreditsDetails {
  id: string;
  order: number;
  name: string;
  original_name: string;
  profile_path: string;
  character: string;
}

interface PosterProps {
  poster_path: FilmDetails['poster_path'];
  title: FilmDetails['title'];
}

interface SubDetailsProps {
  country: Country['name'];
  genreList: Genre['name'];
  budget: FilmDetails['budget'];
  runtime: FilmDetails['runtime'];
}

export type {
  UseFavoriteParams,
  UseFavoriteReturn,
  FavoriteButtonProps,
  FilmCardProps,
  PosterProps,
  CreditsProps,
  SubDetailsProps,
  MainDetailsProps,
  FilmsListFetch,
  User,
  FilmInfoFetch,
  FavoriteFilmData,
  GenresListFetch,
  SortOption,
  Pages,
  Dialog,
  Country,
  Filter,
  FilmDetails,
  FilmCreditsDetails,
  Genre,
};
