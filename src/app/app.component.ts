import { Component, OnDestroy, OnInit } from '@angular/core';
import { Languages, LanguageService } from './services/language.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { AppTitleService } from './services/app-title.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  public currentLanguage = '';
  public LanguagesTemplate = Languages;

  private readonly unsubscribe$ = new Subject<void>();

  constructor(
    private languageService: LanguageService,
    private appTitleService: AppTitleService
  ) {
    this.languageService.currentLanguageName$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((currentLanguge) => (this.currentLanguage = currentLanguge));
  }

  ngOnInit() {
    this.appTitleService.setDefaultTitle();
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  setLang(lang: Languages) {
    this.languageService.setLanguage(lang);
  }
}
