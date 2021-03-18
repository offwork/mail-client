import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppShellModule } from './app-shell/app-shell.module';
import { AuthModule } from './auth/auth.module';
import { StorageService } from './services/storage.service';



@NgModule({
  declarations: [],
  exports: [AppShellModule],
  imports: [
    CommonModule,
    AppShellModule,
    AuthModule
  ],
  providers: [ StorageService ]
})
export class CoreModule { }
