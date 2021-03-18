import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PasswordRecoveryComponent } from './components/password-recovery.component';
import { SignInComponent } from './components/sign-in.component';
import { SignUpComponent } from './components/sign-up.component';

const authRoutes: Routes = [{
  path: 'sign-in',
  component: SignInComponent
}, {
  path: 'sign-up',
  component: SignUpComponent
}, {
  path: 'recovery',
  component: PasswordRecoveryComponent
}];


@NgModule({
  imports: [
    RouterModule.forChild(authRoutes)
  ],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
