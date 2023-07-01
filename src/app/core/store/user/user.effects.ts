import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap, map } from 'rxjs';
import { LocalStorageService } from '../../services/local-storage.service';
import { rehydrateUserData, submitUserData } from './user.actions';

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private localStorageService: LocalStorageService
  ) {}

  saveUserData$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(submitUserData),
        tap(({ userData }) => {
          this.localStorageService.setItem('userData', userData);
        })
      ),
    { dispatch: false }
  );

  rehydrateUserData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(rehydrateUserData),
      map(() => {
        const storedUserData = this.localStorageService.getItem('userData');
        if (storedUserData) {
          return submitUserData({ userData: storedUserData });
        } else {
          // optional: handle case where no data is stored
          return { type: 'NO_OP' };
        }
      })
    )
  );
}
