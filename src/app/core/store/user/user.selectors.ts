import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from './user.reducers';

export const selectFeature = createFeatureSelector<State>('user');

export const selectUserData = createSelector(
  selectFeature,
  (state: State) => state.userData
);
