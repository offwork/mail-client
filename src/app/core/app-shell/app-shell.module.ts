import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  LayoutContentComponent,
  LayoutContainerComponent,
  LayoutHeaderComponent,
  LayoutFooterComponent,
  LayoutSimpleComponent,
} from './components';

@NgModule({
  declarations: [
    LayoutContentComponent,
    LayoutContainerComponent,
    LayoutHeaderComponent,
    LayoutFooterComponent,
    LayoutSimpleComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    LayoutContentComponent,
    LayoutContainerComponent,
    LayoutHeaderComponent,
    LayoutFooterComponent,
    LayoutSimpleComponent,
  ],
})
export class AppShellModule {}
