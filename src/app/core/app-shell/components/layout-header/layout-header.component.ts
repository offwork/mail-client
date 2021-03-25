import { AfterViewInit, Component, Input, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Profile } from 'src/app/core/auth/models/pofile';
import { AuthService } from 'src/app/core/auth/services/auth.service';

@Component({
  selector: 'app-layout-header',
  templateUrl: './layout-header.component.html',
  styleUrls: ['./layout-header.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: { class: 'layout-header' }
})
export class LayoutHeaderComponent implements OnDestroy, AfterViewInit {
  @Input() profile: Profile;
  _endSubscription = new Subject<boolean>();

  constructor(
    private _auth: AuthService,
    private _router: Router) {}

  clickOnLogout() {
    this._auth.logout()
      .pipe(takeUntil(this._endSubscription))
      .subscribe(() => this._router.navigate(['sign-in']));
  }

  ngAfterViewInit() {
    console.log('Profile: ', this.profile);
  }

  ngOnDestroy() {
    this._endSubscription.next(true);
    this._endSubscription.complete();
  }
}
