import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {Photo} from '../types/Photo';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private http: HttpClient) {
  }

  fetchPhotos(amount?: number): Observable<Array<Photo>> {
    if (amount) {
      return this.http.get<Array<Photo>>(`${environment.photosUrl}?_limit=${amount}`);
    } else {
      return this.http.get<Array<Photo>>(environment.photosUrl);
    }
  }
}
