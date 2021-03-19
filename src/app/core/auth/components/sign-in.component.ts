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
    <div>
      <pre>
        "email": "eve.holt@reqres.in",
        "password": "cityslicka"
      </pre>
    </div> 
    <form class="login-form" [formGroup]="signInForm" (ngSubmit)="send()">
      <div class="form-fields">
        <input type="email" formControlName="email" />
      </div>
      <div class="form-fields">
        <input type="password" formControlName="password" />
      </div>
      <div class="form-button-groups">
        <button type="button" (click)="reset()">Reset</button>
        <button type="submit">Send</button>
      </div>
    </form>
  `,
styles: [`
  .login-form {
    display: flex;
    flex-direction: column;
    padding: 24px;
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
          this._storage.setItem('access-token', response.token);
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
