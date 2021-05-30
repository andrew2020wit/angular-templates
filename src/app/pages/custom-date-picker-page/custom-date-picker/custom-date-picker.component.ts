import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DatePickerHeaderComponent } from './date-picker-header/date-picker-header.component';

@Component({
  selector: 'app-custom-date-picker',
  templateUrl: './custom-date-picker.component.html',
  styleUrls: ['./custom-date-picker.component.scss'],
})
export class CustomDatePickerComponent {
  @Input() disabled = false;
  @Input() max: Date | null = null;
  @Input() min: Date | null = null;
  @Input() date: Date = new Date();
  @Input() label = '';
  @Output() dateChange = new EventEmitter<Date>();

  datePickerHeaderComponent = DatePickerHeaderComponent;

  constructor() {}

  dateChanged(event: any) {
    this.dateChange.emit(event.value);
  }
}
