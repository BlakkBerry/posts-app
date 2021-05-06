import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {Post} from '../types/Post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) {
  }

  fetchPosts(amount?: number): Observable<Array<Post>> {
    if (amount) {
      return this.http.get<Array<Post>>(`${environment.postsUrl}?_limit=${amount}`);
    } else {
      return this.http.get<Array<Post>>(environment.postsUrl);
    }
  }
}
