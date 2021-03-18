import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppShellModule } from './app-shell/app-shell.module';



@NgModule({
  declarations: [],
  exports: [AppShellModule],
  imports: [
    CommonModule,
    AppShellModule
  ]
})
export class CoreModule { }
