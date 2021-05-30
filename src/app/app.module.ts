import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContentPageComponent } from './pages/content-page/content-page.component';
import { CustomDatePickerPageComponent } from './pages/custom-date-picker-page/custom-date-picker-page.component';
import { CustomDatePickerComponent } from './pages/custom-date-picker-page/custom-date-picker/custom-date-picker.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { DatePickerHeaderComponent } from './pages/custom-date-picker-page/custom-date-picker/date-picker-header/date-picker-header.component';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';
import { HttpClientModule } from '@angular/common/http';
import { TranslocoRootModule } from './transloco/transloco-root.module';
import { AppTitleService } from './services/app-title.service';

@NgModule({
  declarations: [
    AppComponent,
    ContentPageComponent,
    CustomDatePickerPageComponent,
    CustomDatePickerComponent,
    DatePickerHeaderComponent,
  ],
  imports: [
    MatNativeDateModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    MatMenuModule,
    HttpClientModule,
    TranslocoRootModule,
  ],
  providers: [AppTitleService],
  bootstrap: [AppComponent],
})
export class AppModule {}
