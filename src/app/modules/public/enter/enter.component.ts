import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enter',
  templateUrl: './enter.component.html',
  styleUrls: ['./enter.component.scss'],
})
export class EnterComponent implements OnInit {
  classes: string = 'flex flex-col justify-center items-center w-full';
  constructor() {}

  ngOnInit(): void {}
}
