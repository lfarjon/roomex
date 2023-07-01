import { createReducer, on } from '@ngrx/store';
import { UserData } from 'src/app/core/models/user-data';
import { rehydrateUserData, submitUserData } from './user.actions';

export interface State {
  userData: UserData | null;
}

export const initialState: State = {
  userData: null,
};

export const userReducer = createReducer(
  initialState,
  on(submitUserData, (state, { userData }) => ({ ...state, userData })),
  on(rehydrateUserData, (state) => ({ ...state }))
);
