import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentPageComponent } from './pages/content-page/content-page.component';
import { CustomDatePickerPageComponent } from './pages/custom-date-picker-page/custom-date-picker-page.component';

const routes: Routes = [
  { path: '', component: ContentPageComponent },
  { path: 'custom-date-picker', component: CustomDatePickerPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
