import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Languages, LanguageService } from './services/language.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { AppTitleService } from './services/app-title.service';
import { DownloadBlobService } from './services/download-blob.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy, AfterViewInit {
  public currentLanguage = '';
  public LanguagesTemplate = Languages;

  private readonly unsubscribe$ = new Subject<void>();

  constructor(
    private languageService: LanguageService,
    private downloadBlobService: DownloadBlobService,
    private appTitleService: AppTitleService
  ) {
    this.languageService.currentLanguageName$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((currentLanguge) => (this.currentLanguage = currentLanguge));
  }

  ngOnInit() {
    this.appTitleService.setDefaultTitle();
  }

  ngAfterViewInit() {
    this.downloadBlobService.downloadBlob.subscribe((it) => {
      const url = window.URL.createObjectURL(it.body);
      const a = document.createElement('a');
      document.body.appendChild(a);
      a.setAttribute('style', 'display: none');
      a.href = url;
      a.download = it.filename;
      a.click();
      setTimeout(() => {
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      }, 100);
    });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  setLang(lang: Languages) {
    this.languageService.setLanguage(lang);
  }
}
