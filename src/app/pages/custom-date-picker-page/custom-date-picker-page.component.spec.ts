import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomDatePickerPageComponent } from './custom-date-picker-page.component';

describe('CustomDatePickerPageComponent', () => {
  let component: CustomDatePickerPageComponent;
  let fixture: ComponentFixture<CustomDatePickerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomDatePickerPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomDatePickerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
