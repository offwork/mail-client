import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter, shareReplay, switchMap } from 'rxjs/operators';
import { RestClient } from 'src/app/core/rest-client/rest-client.service';
import { Response, User } from '../models/user-response.model';
import { environment } from '../../../../environments/environment'


@Injectable()
export class InboxService {

  _allUsers = new BehaviorSubject<any>(null);
  allUsers$ = this._allUsers.pipe(
    switchMap(() => this.__getUsers()),
    shareReplay(1)
  );

  constructor(private rest: HttpClient) {}

  __getUsers(): Observable<Response<User>> {
    return this.rest.get<Response<User>>(`${environment.API_URL}/api/users?page=2`);
  }
}
