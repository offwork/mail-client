import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password-recovery',
  template: `
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
export class PasswordRecoveryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}
}
