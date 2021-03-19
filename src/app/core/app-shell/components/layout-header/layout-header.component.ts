import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
export class LayoutHeaderComponent implements OnDestroy, OnInit {

  profile: Profile;
  _endSubscription = new Subject<boolean>();

  constructor(
    /* private injector: Injector, */
    private _auth: AuthService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router) {}

  clickOnLogout() {
    /* const auth = this.injector.get(AuthService);
    auth.logout(); */
    this._auth.logout()
      .pipe(takeUntil(this._endSubscription))
      .subscribe(() => this._router.navigate(['sign-in']));
  }

  ngOnInit() {
    this.profile = new Profile(this._activatedRoute.snapshot.data.profile);
    console.log(this.profile)
  }

  ngOnDestroy() {
    this._endSubscription.next(true);
    this._endSubscription.complete();
  }
}
