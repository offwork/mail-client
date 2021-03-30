import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { shareReplay, switchMap } from 'rxjs/operators';
import { RestClient } from '@core/rest-client';
import { Response, User } from '../models/user-response.model';

@Injectable()
export class InboxService {

  _allUsers = new BehaviorSubject<any>(null);
  allUsers$ = this._allUsers.pipe(
    switchMap(() => this.__getUsers()),
    shareReplay(1)
  );

  constructor(private rest: RestClient) {}

  __getUsers(): Observable<Response<User>> {
    return this.rest.request('GET', `api/users?page=2`);
  }
}
