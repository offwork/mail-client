import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AuthService } from './core/auth/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  _endSubcription = new Subject<boolean>();

  constructor(private _authService: AuthService, private _route: Router) {
    this._authService.isAuthenticated()
      .pipe(takeUntil(this._endSubcription))
      .subscribe((auth) => {
        auth
          ? this._route.navigate(['mail/inbox']) 
          : this._route.navigate(['sign-in']);
      })
  }

  ngOnDestroy() {
    this._endSubcription.next(true);
    this._endSubcription.complete();
  }
}
