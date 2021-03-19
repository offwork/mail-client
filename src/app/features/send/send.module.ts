import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SendContainerComponent } from './container/send-container.component';
import { RouterModule, Routes } from '@angular/router';

const sendRoutes: Routes = [
  {
    path: '',
    component: SendContainerComponent
  }
]


@NgModule({
  declarations: [SendContainerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(sendRoutes)
  ]
})
export class SendModule { }
