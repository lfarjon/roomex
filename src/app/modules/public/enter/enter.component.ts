import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enter',
  templateUrl: './enter.component.html',
  styleUrls: ['./enter.component.scss'],
})
export class EnterComponent implements OnInit {
  classes: string = 'w-full max-w-xl p-5';
  constructor() {}

  ngOnInit(): void {}
}
