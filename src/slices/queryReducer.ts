import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DEFAULT_QUERY } from '../constants';

const querySlice = createSlice({
  name: 'query',
  initialState: DEFAULT_QUERY,
  reducers: {
    resetQuery: () => DEFAULT_QUERY,
    changeQuery: (state, action: PayloadAction<string>) => {
      return action.payload;
    },
  },
});

const { actions, reducer: queryReducer } = querySlice;
export const { changeQuery } = actions;
export default queryReducer;
