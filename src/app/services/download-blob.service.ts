import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface IDownloadBlob {
  body: any;
  filename: string;
}

@Injectable({
  providedIn: 'root',
})
export class DownloadBlobService {
  downloadBlob = new Subject<IDownloadBlob>();

  constructor() {}
}
