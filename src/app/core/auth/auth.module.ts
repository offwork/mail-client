import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SignInComponent } from './components/sign-in.component';
import { SignUpComponent } from './components/sign-up.component';
import { PasswordRecoveryComponent } from './components/password-recovery.component';
import { AuthRoutingModule } from './auth-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SahredModule } from 'src/app/shared/sahred.module';



@NgModule({
  declarations: [SignInComponent, SignUpComponent, PasswordRecoveryComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    SahredModule,
    AuthRoutingModule,
  ]
})
export class AuthModule { }
