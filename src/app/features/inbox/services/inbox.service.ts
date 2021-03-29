import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { shareReplay, switchMap } from 'rxjs/operators';
import { RestClient } from 'src/app/core/rest-client/rest-client.service';
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
