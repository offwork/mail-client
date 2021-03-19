import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrashContainerComponent } from './container/trash-container.component';
import { RouterModule, Routes } from '@angular/router';

const trashRoutes: Routes = [
  {
    path: '',
    component: TrashContainerComponent
  }
]

@NgModule({
  declarations: [TrashContainerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(trashRoutes)
  ]
})
export class TrashModule { }
