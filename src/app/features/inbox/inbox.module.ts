import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { InboxContainerComponent } from './container/inbox-container.component';
import { InboxService } from './services/inbox.service';
import { RestClientModule } from 'src/app/core/rest-client/rest-client.module';


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
    HttpClientModule,
    /* RestClientModule, */
    RouterModule.forChild(inboxRoutes)
  ],
  exports: [RouterModule],
  providers: [ InboxService ]
})
export class InboxModule { }
