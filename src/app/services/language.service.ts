import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TranslocoService } from '@ngneat/transloco';
import { DateAdapter } from '@angular/material/core';
import { AppTitleService } from './app-title.service';

export enum Languages {
  en = 'en',
  ru = 'ru',
}

const LanguagesName = {
  en: 'English',
  ru: 'Russian',
};

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private _currentLanguageName$ = new BehaviorSubject<string>(LanguagesName.en);
  currentLanguageName$ = this._currentLanguageName$.asObservable();

  constructor(
    private translocoService: TranslocoService,
    private dateAdapter: DateAdapter<Date>,
    private appTitleService: AppTitleService
  ) {}

  setLanguage(lang: Languages) {
    this.translocoService.setActiveLang(lang);
    this._currentLanguageName$.next(LanguagesName[lang]);
    this.dateAdapter.setLocale(lang);
    this.appTitleService.reSetTitle();
  }
}
