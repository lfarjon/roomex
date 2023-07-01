import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/core/services/user.service';
import { UserData } from 'src/app/core/models/user-data';
import { rehydrateUserData } from 'src/app/core/store/user/user.actions';
import { selectUserData } from 'src/app/core/store/user/user.selectors';

@Component({
  selector: 'app-show-user-data-component',
  templateUrl: './show-user-data.component.html',
  styleUrls: ['./show-user-data.component.scss'],
})
export class ShowUserDataComponent implements OnInit {
  userData$: Observable<UserData | null>;

  constructor(private userService: UserService, private store: Store) {
    this.userData$ = this.userService.getUserData();
  }

  ngOnInit(): void {
    this.store.select(selectUserData).subscribe((userData) => {
      if (!userData) {
        this.store.dispatch(rehydrateUserData());
      }
    });
  }
}
