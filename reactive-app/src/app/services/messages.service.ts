import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class MessagesService {

  private errorSubject = new BehaviorSubject<string[]>([]);
  errors$: Observable<string[]> = this.errorSubject.asObservable();

  constructor() { }

  // emit errors
  error(...errors: string[]) {
    this.errorSubject.next(errors);
  }

}
