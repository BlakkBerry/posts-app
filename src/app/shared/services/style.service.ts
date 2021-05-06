import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StyleService {

  private background = new BehaviorSubject<string>('white');
  currentBackground = this.background.asObservable();

  constructor() {
  }

  changeBackground(color: string): any {
    this.background.next(color);
  }
}
