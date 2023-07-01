import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UserData } from 'src/app/shared/models/user-data';
import { submitUserData } from '../store/user/user.actions';
import { selectUserData } from '../store/user/user.selectors';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private store: Store) {}

  submitUserData(userData: UserData): void {
    this.store.dispatch(submitUserData({ userData }));
  }

  getUserData(): Observable<UserData | null> {
    return this.store.select(selectUserData);
  }
}
