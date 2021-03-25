import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutContentComponent, LayoutSimpleComponent } from './core/app-shell/components';
import { AuthGuard } from './core/auth/guards/auth.guard';
import { UserResolve } from './core/services/user.resolve';

const routes: Routes = [
  { path: '', redirectTo: 'mail/inbox', pathMatch: 'full' }, 
  {
    path: '',
    component: LayoutSimpleComponent,
    canActivate: [ AuthGuard ],
    children: [{
      path: 'auth',
      loadChildren: () => import('./core/auth/auth.module').then(m => m.AuthModule),
    }]
  },
  {
    path: 'mail',
    component: LayoutContentComponent,
    canActivate: [ AuthGuard ],
    children: [
      {
        path: 'inbox',
        loadChildren: () => import('./features/inbox/inbox.module').then(m => m.InboxModule),
      },
      {
        path: 'send',
        loadChildren: () => import('./features/send/send.module').then(m => m.SendModule),
      },
      {
        path: 'trash',
        loadChildren: () => import('./features/trash/trash.module').then(m => m.TrashModule),
      }
    ],
    resolve: {
      profile: UserResolve
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
