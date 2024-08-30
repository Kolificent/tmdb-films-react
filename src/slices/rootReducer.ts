import { combineReducers } from 'redux';
import userReducer from './userReducer';
import filtersReducer from './filtersReducer';
import dialogReducer from './dialogReducer';
import filmsReducer from './filmsReducer';
import genresListReducer from './genresListReducer';
import filmInfoReducer from './filmInfoReducer';
import queryReducer from './queryReducer';

const rootReducer = combineReducers({
  userReducer,
  filtersReducer,
  dialogReducer,
  filmsReducer,
  filmInfoReducer,
  genresListReducer,
  queryReducer,
});

export default rootReducer;
