import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  Router,
} from '@angular/router';
import { TranslocoService } from '@ngneat/transloco';
import { Subscription } from 'rxjs';

const defaultHeader = 'Angular templates';

@Injectable({
  providedIn: 'root',
})
export class AppTitleService {
  private currentOriginalTitle = '';

  private selectTranslateSub: Subscription | null = null;

  constructor(
    private titleService: Title,
    private router: Router,
    private translateService: TranslocoService
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.autoSetTitle(event);
      }
      if (
        event instanceof NavigationCancel ||
        event instanceof NavigationError
      ) {
        this.setDefaultTitle();
        console.error('error navigation');
      }
    });
  }

  public setTitle(title: string) {
    this.titleService.setTitle(defaultHeader);
    this.currentOriginalTitle = title;
    if (this.selectTranslateSub) {
      this.selectTranslateSub.unsubscribe();
    }
    this.selectTranslateSub = this.translateService
      .selectTranslate(title)
      .subscribe((title) => {
        this.titleService.setTitle(title);
      });
  }

  public reSetTitle() {
    if (!this.currentOriginalTitle) {
      return;
    }
    this.setTitle(this.currentOriginalTitle);
  }

  public setDefaultTitle() {
    this.titleService.setTitle(defaultHeader);
  }

  private autoSetTitle(event: NavigationEnd) {
    const url = event.url;
    if (url.indexOf('custom-date-picker') >= 0) {
      this.setTitle('Custom datepicker');
      return;
    }

    this.setDefaultTitle();
  }
}
