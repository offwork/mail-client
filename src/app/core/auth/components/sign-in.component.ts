import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { StorageService } from '../../services/storage.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-sign-in',
  template: `
    <!-- <div>
      <pre>
        "email": "eve.holt@reqres.in",
        "password": "cityslicka"
      </pre>
    </div> -->
    <form class="login-form" [formGroup]="signInForm" (ngSubmit)="send()">

      <mat-form-field appearance="outline">
        <mat-label>Enter your email</mat-label>
        <input matInput formControlName="email" type="text">
        <button mat-icon-button matSuffix [attr.aria-label]="'EMail'">
          <mat-icon>type</mat-icon>
        </button>
      </mat-form-field>
  
      <mat-form-field appearance="outline">
        <mat-label>Enter your password</mat-label>
        <input matInput formControlName="password" [type]="hide ? 'password' : 'text'">
        <button mat-icon-button matSuffix (click)="hide = !hide" [attr.aria-label]="'Hide password'" [attr.aria-pressed]="hide">
          <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>
        </button>
      </mat-form-field>

      <div class="form-button-groups">
        <button mat-flat-button color="accent" type="button" (click)="reset()">Reset</button>
        <button mat-flat-button color="primary" type="submit">Send</button>
      </div>
    </form>
  `,
styles: [`
  .login-form {
    display: flex;
    flex-direction: column;
    padding: 0 64px;
  }
  .form-fields {
    margin-bottom: 16px;
    display: flex;
  }
  .form-fields > input {
    width: 100%;
  }
  .form-button-groups > button:last-child {
    margin-left: 16px;
  }
  .login-header {
    background-color: #eee;
    border-bottom: 1px solid #8a8a8a;
    text-align: center;
  }
  .login-header > h2 {
    margin-top: 0px;
    padding: 20px 24px 0 24px;
  }
  .login-footer {
    border-top: 1px solid #ccc;
    text-align: center;
  }
`]
})
export class SignInComponent implements OnDestroy {

  hide = true;

  signInForm: FormGroup = this._fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  });

  _endSubcription = new Subject<boolean>();

  constructor(
    public _fb: FormBuilder, 
    private _auth: AuthService, 
    private _storage: StorageService, 
    private _router: Router) { }

  send() {
    if (this.signInForm.valid && this.signInForm.touched) {
      console.log('Sing In Form: ', this.signInForm);
      this._auth.login(this.signInForm.value)
        .pipe(takeUntil(this._endSubcription))
        .subscribe((response) => {
          const expired = new Date().getTime() + 300000;
          this._storage.setItem('access-token', response.token);
          this._storage.setItem('token-expired', String(expired));
          this._router.navigate(['mail']);
        });
    }
  }

  reset() {}

  ngOnDestroy() {
    this._endSubcription.next(true);
    this._endSubcription.complete();
  }
}
