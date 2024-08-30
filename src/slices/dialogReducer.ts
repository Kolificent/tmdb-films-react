import { createSlice } from '@reduxjs/toolkit';
import { DEFAULT_DIALOG, DIALOG_STATUSES } from '../constants';
import { Dialog } from '../contracts';

const dialogSlice = createSlice({
  name: 'dialog',
  initialState: DEFAULT_DIALOG,
  reducers: {
    changeToken: (state: Dialog) => {
      return { ...state, status: DIALOG_STATUSES.IDLE };
    },
    changeEmail: (state: Dialog) => {
      return { ...state, status: DIALOG_STATUSES.LOGIN };
    },
    openDialog: (state: Dialog) => {
      return { ...state, status: DIALOG_STATUSES.SIGN_UP };
    },
    closeDialog: (state: Dialog) => {
      return { ...state, status: DIALOG_STATUSES.IDLE };
    },
  },
});

const { actions, reducer: dialogReducer } = dialogSlice;
export const { changeToken, changeEmail, openDialog, closeDialog } = actions;
export default dialogReducer;
