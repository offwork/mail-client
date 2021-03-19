import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ProfileData } from '../auth/models/pofile';
import { ProfileService } from './profile.service';


@Injectable({ providedIn: 'root' })
export class UserResolve implements Resolve<ProfileData> {

  readonly userId = 2;

  constructor(private _profileService: ProfileService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): ProfileData | Observable<ProfileData> | Promise<ProfileData> {
    return this._profileService.getUserProfile(this.userId);
  }
}
