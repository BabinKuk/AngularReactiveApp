import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { User } from '../shared/model/user';
// tslint:disable-next-line:import-blacklist
import { Observable, BehaviorSubject } from 'rxjs/Rx';

export const UNKNOWN_USER: User = {
  firstName: 'Unknown'
};

@Injectable()
export class UserService {

  private subject = new BehaviorSubject(UNKNOWN_USER);

  user$: Observable<User> = this.subject.asObservable();

  constructor(private http: Http) { }

  login(email: string, password: string): Observable<User> {
    console.log('login service ' + email + ', ' + password);

    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.post('/api/login', {email, password}, {headers})
        .map(res => res.json())
        .do(user => console.log(user))
        .do(user => this.subject.next(user))
        .publishLast().refCount();
  }

}
