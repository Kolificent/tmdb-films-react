import { SORT_OPTIONS } from '../constants';
import { Filter, User } from '../contracts';

function buildRequestParameters(
  userId: User['id'],
  query: string,
  filters: Filter,
) {
  const currentPage = filters.pages.current;
  const isShowFavorites = filters.isShowFavorites;

  if (query) {
    return `/search/movie?query=${query}&include_adult=false&language=ru-RU&page=${currentPage}`;
  }

  if (isShowFavorites) {
    return `/account/${userId}/favorite/movies?language=ru-RU&page=${currentPage}&sort_by=created_at.desc`;
  }

  const { sort: sortId, isOrderAscending, genresId, years } = filters;
  const order = isOrderAscending ? '.asc' : '.desc';
  const sortOption = SORT_OPTIONS.find((option) => option.id === sortId)?.name;

  const queryParameters = [
    `include_adult=false`,
    `primary_release_date.gte=${years[0]}-01-01`,
    `primary_release_date.lte=${years[1]}-12-31`,
    `language=ru-RU`,
    `page=${currentPage}`,
    `sort_by=${sortOption}${order}`,
    sortId === 1 ? 'vote_count.gte=200' : '',
    genresId.length ? `with_genres=${genresId.join(',')}` : '',
    `without_genres=99,10755`,
  ].join('&');

  return `/discover/movie?${queryParameters}`;
}

export default buildRequestParameters;
