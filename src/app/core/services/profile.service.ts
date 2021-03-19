import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { ProfileData } from '../auth/models/pofile';

@Injectable({ providedIn: 'root' })
export class ProfileService {

  constructor(private http: HttpClient) { }


  getUserProfile(id: number) {
    return this.http.get<ProfileData>(`${environment.API_URL}/api/users/${id}`);
  }
}
