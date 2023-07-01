import { Component, OnInit } from '@angular/core';
import { map, Observable, take } from 'rxjs';
import { UserService } from 'src/app/core/services/user.service';
import { UserData } from 'src/app/shared/models/user-data';

@Component({
  selector: 'app-thank-you-component',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.scss'],
})
export class ThankYouComponent implements OnInit {
  userData$: Observable<UserData | null>;
  constructor(private userService: UserService) {
    this.userData$ = this.userService.getUserData();
  }

  ngOnInit(): void {}
}
