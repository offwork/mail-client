import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StorageService } from '../../services/storage.service';
import { Observable, of } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { User } from '../models/user';
import { AuthResponse } from '../models/auth-response';
import { delay } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthService {

  constructor(private _http: HttpClient, private _storage: StorageService) { }

  login(user: User): Observable<AuthResponse> {
    return this._http.post<AuthResponse>(`${environment.API_URL}/api/login`, user);
  }

  logout() {
    return of(this._storage.clear()).pipe(delay(3000));
  }

  isAuthenticated(): Observable<boolean> {
    return of(this._storage.hasItem('access-token'));
  }
}
