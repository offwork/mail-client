import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InboxContainerComponent } from './container/inbox-container.component';


const inboxRoutes: Routes = [
  {
    path: '',
    component: InboxContainerComponent
  }
]


@NgModule({
  declarations: [ InboxContainerComponent ],
  imports: [
    CommonModule,
    RouterModule.forChild(inboxRoutes)
  ],
  exports: [RouterModule]
})
export class InboxModule { }
