import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutContentComponent, LayoutSimpleComponent } from './core/app-shell/components';

const routes: Routes = [{
    path: '', redirectTo: 'mail', pathMatch: 'full'
  }, {
    path: '',
    component: LayoutSimpleComponent,
    children: [{
      path: '',
      loadChildren: () => import('./core/auth/auth.module').then(m => m.AuthModule),
    }]
  }, {
    path: 'mail',
    component: LayoutContentComponent,
    children: []
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
