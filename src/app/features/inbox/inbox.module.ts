import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InboxContainerComponent } from './container/inbox-container.component';
import { InboxService } from './services/inbox.service';


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
  exports: [RouterModule],
  providers: [ InboxService ]
})
export class InboxModule { }
