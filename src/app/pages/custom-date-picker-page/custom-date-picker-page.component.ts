import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-date-picker-page',
  templateUrl: './custom-date-picker-page.component.html',
  styleUrls: ['./custom-date-picker-page.component.scss'],
})
export class CustomDatePickerPageComponent implements OnInit {
  date: Date = new Date();

  constructor() {}

  ngOnInit(): void {}

  test(event: any) {
    console.log('CustomDatePickerPageComponent', event);
  }
}
