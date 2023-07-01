import { createAction, props } from '@ngrx/store';
import { UserData } from 'src/app/shared/models/user-data';

export const submitUserData = createAction(
  '[User] Submit Data',
  props<{ userData: UserData }>()
);

export const rehydrateUserData = createAction('[User] Rehydrate');
